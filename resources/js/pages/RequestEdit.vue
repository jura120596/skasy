<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="'Новый запрос' ">
        </v-toolbar-title>
        <v-combobox
                v-model="request.role"
                :erro-messages="messages.role"
                :items="roles"
                label="Куда"
                dense
        ></v-combobox>
        <v-combobox
                v-model="request.type"
                :erro-messages="messages.type"
                :items="types"
                label="Тип заявления"
                dense
        ></v-combobox>
        <v-textarea
            type="text"
            name="title"
            label="Текст заявления"
            v-model="request.text"
            :error-messages="messages.text"
            >
        </v-textarea>

        <v-btn class="save-btn"
               v-if="$route.params.id == 0"
               color="success"
               fab
               @click="create"
               :disabled="!(request.role && request.type && request.text)"
               dark>
            <v-icon>mdi-check-outline</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    import PhotoLoader from '@/components/photo-loader'
    export default {
        name: "RequestEdit",
        components: {
            Editor,
            PhotoLoader
        },
        data: (vm) => {
            return {
                request: {
                    id: vm.$route.params.id,
                    type: null,
                    role: null,
                    text: '',
                },
                roles: [
                    {
                        value: 128,
                        text: 'В библиотеку'
                    },
                    {
                        value: 1024,
                        text: 'В администрацию'
                    },
                ],
                types : vm.$store.state.types,
                messages: {
                    type: '',
                    text: '',
                    role: '',
                }
            }
        },
        mounted() {
        },
        methods: {
            create() {
                if (!(this.request.id > 0))
                    window.axios.post('/request', {
                        text: this.request.text,
                        role: this.request.role?.value || null,
                        type: this.request.type?.value || null,
                    })
                    .then((r) => {
                        this.$router.push({name: "requests"});
                    }).catch((e) => {
                        if (e.response && e.response.status === 422) {
                            let errors = e.response.data.errors
                            Object.keys(this.messages).forEach((k)=> {
                                this.messages[k] = errors[k]?.[0] || '';
                            });
                    }
                })
            }
        }
    }
</script>

<style>
    .description .v-text-field__slot textarea {
        display: none !important;
    }
    .description.v-text-field>.v-input__control>.v-input__slot:after ,
    .description.v-text-field>.v-input__control>.v-input__slot:before{
        display: none !important;
    }
</style>