<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="$route.params.id  == 0 ? 'Добавление обращения' :  'Редактирование обращения'">
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
        <photo-loader ref="loader"  :photos="post.photos"/>
        <v-btn class="save-btn-text"
               @click="() => post.id>0 ? update() : create()"
               color="success"
               :disabled="!(post.id> 0) && (!post.description || !post.title)">
            Сохранить
        </v-btn>
    </v-container>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    import PhotoLoader from '@/components/photo-loader'
    export default {
        name: "UserPostEdit",
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
                    photos: [],
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
                window.axios.get('/user/post/'+ modelId).then((response) => {
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
                window.axios.post('/user/post', this.post)
                    .then((r) => {
                        this.post.id = r.data.data.id;
                        this.update();
                    }).catch((e) => {
                    if (e.response && e.response.status === 422) {
                        let errors = e.response.data.errors
                        Object.keys(this.messages).forEach((k)=> {
                            this.messages[k] = errors[k]?.[0] || '';
                        });
                    }
                })
            },
             update() {
                window.axios.put('/user/post/'+ this.post.id, this.post)
                    .then((r) => {
                        let newPhotos = this.$refs.loader.getPhotos();
                        if (newPhotos.length) {
                            const formData = new FormData();
                            newPhotos.forEach((photo, i) => {
                                if (photo.name) formData.append('post_photos['+i+']', photo, photo.name);
                                else formData.append('delete_photos['+i+']', photo)
                            });
                            formData.append('_method', 'PUT');
                            try {
                                window.axios.post('/user/post/'+this.post.id, formData).then(() => {
                                    this.$router.push({name: "uposts"});
                                });
                            } catch (e) {
                                this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`;
                                this.$root.$children[0].snackbar = true;
                                this.$router.push({name: "uposts"});
                            }
                        }
                    }).catch((e) => {
                    console.log(e);
                    if (e.response && e.response.status === 422) {
                        let errors = e.response.data.errors;
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