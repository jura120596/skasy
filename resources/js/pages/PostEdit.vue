<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="$route.params.id  == 0 ? 'Добавление новости' :  'Редактирование новости'">
        </v-toolbar-title>
        <v-text-field
            type="text"
            name="title"
            label="Заголовок"
            v-model="post.title"
            :error-messages="messages.title"
            >
        </v-text-field>
        <v-textarea
                name="description"
                label="Описание"
                hint="Hint text"
                :value="' '"
                class="description "
                :error-messages="messages.description"
        ></v-textarea>
        <editor
                api-key="kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t"
                class="mt-2"
                v-model="post.description"
        >
        </editor>
        <v-spacer/>
        <photo-loader v-if="$route"></photo-loader>
        <v-btn class="save-btn"
               color="success"
               fab
               @click="create"
               :disabled="!(post.description && post.title)"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    import PhotoLoader from '@/components/photo-loader'
    export default {
        name: "PostAdd",
        components: {
            Editor,
            PhotoLoader
        },
        data: (vm) => {
            return {
                post: {
                    id: vm.$route.params.id,
                    title: '',
                    description: '',
                },
                messages: {
                    title: '',
                    description: '',
                }
            }
        },
        mounted() {
            let modelId = this.$route.params.id;
            if (modelId != 0) {
                window.axios.get('/post/'+ modelId).then((response) => {
                    this.post = response.data.data;
                }).catch((e) => {
                    console.log(e);
                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';
                    this.$root.$children[0].snackbar = true;
                });
            }
        },
        methods: {
            create() {
                window.axios.post('/post', this.post)
                    .then((r) => {
                        this.$root.$children[0].snackbarText = r.data.message;
                        this.$root.$children[0].snackbar = true;
                        this.$router.push({name: "post", params: {id: r.data.data.id}});
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