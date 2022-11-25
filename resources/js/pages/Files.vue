<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="$route.params.user_id > 0 ? 'Файлы пользователя' : 'Мои файлы'">
        </v-toolbar-title>
        <div v-if="files.length > 0">
            <v-container>
                <v-card  v-for="(entry, index) in files" :key="index"
                         style="position:relative;"
                         class="ma-2"
                        elevation="0">
                    <div
                         class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                        <v-btn color="red"
                               fab
                               small
                               @click="delete_id = entry.id"
                               class="mr-3"
                               dark>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        <v-btn color="green"
                               fab
                               small
                               @click="download(entry.id)"
                               dark>
                            <v-icon>mdi-download</v-icon>
                        </v-btn>
                    </div>
                    <h4 style="max-width: 60%">{{ entry.title }}</h4>
                </v-card>
                <div class="text-center xs-12" v-if="l > 1">
                    <v-pagination
                            :length="l"
                            :total-visible="3"
                            v-model="page"
                    ></v-pagination>
                </div>
            </v-container>
        </div>
        <div v-else>
            <div class="text-center my-3">Файлов пока нет</div>
        </div>

        <v-btn class="save-btn"
               color="success"
               fab
               @click="openDialog"
               dark>
            <v-icon>mdi-paperclip</v-icon>
        </v-btn>
        <v-dialog
                v-if="show"
                :value="show"
                @close="closeDialog"
                :fullscreen="$vuetify.breakpoint.mobile"
        >
            <template slot:default>
                <v-card>

                    <v-toolbar  class="container py-1 my-0 justify-space-between" elevation="1">
                        <v-toolbar-title>
                            <span class="headline">Загрузка файла</span>
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-toolbar-title><v-icon
                                class="flex-grow-0"
                                text
                                @click="closeDialog">X</v-icon>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-col>

                                <v-card-text>
                                    Выберите файл для загрузки, и обозначте его
                                </v-card-text>
                                <v-form @keyup.native.enter="upload">
                                    <v-text-field
                                            v-model="file.title"
                                            label="Обозначение(Инн, паспорт)"
                                            :error-messages="titleError"
                                            name="title"
                                            type="text"
                                            required
                                    />

                                    <photo-loader :one="true" ref="loader"></photo-loader>
                                    <v-card
                                            class="d-flex justify-center align-center"
                                            flat
                                            height="auto"
                                            tile
                                    >
                                        <v-btn color="dark" @click="upload" :disabled="file.title == ''">
                                            Подтвердить
                                        </v-btn>
                                    </v-card>
                                </v-form>
                            </v-col>
                        </v-container>
                    </v-card-text>
                </v-card>
            </template>
        </v-dialog>
    </v-container>
</template>

<script>
    import PhotoLoader from "../components/photo-loader";
    export default {
        name: "Files",
        components: {PhotoLoader},
        data: (vm) => {
            return {
                l: 1,
                file: {
                    title: '',
                    file: null,
                },
                files: [],
                page: 1,
                delete_id: 0,
                show: false,
                titleError: '',
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            openDialog() {
                this.show = true
            },
            closeDialog() {
                this.show = false;
            },
            getPage() {
                window.axios.get('file?', {params: {
                        page: this.page,
                        user_id: (this.$route.params.user_id > 0 ? this.$route.params.user_id : null)
                }}).then((r) => {
                    this.files = r.data.data;
                    this.l = r.data.last_page
                })
            },
            upload() {
                let newPhotos = [this.$refs.loader.getFirst()];
                if (newPhotos.length) {
                    const formData = new FormData()
                    newPhotos.forEach((photo, i) => {
                        formData.append('file', photo, photo.name)
                    })
                    formData.append('title', this.file.title)
                    try {
                        window.axios.post('/file', formData).then((r) => {
                            this.getPage()

                        })
                    } catch (e) {
                        console.log(e)
                        this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`
                        this.$root.$children[0].snackbar = true
                    }
                }
                this.closeDialog()
            },
            download(id) {
                window.axios.get('file/'+id, {
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', decodeURIComponent(response.headers['content-disposition'].split(';')[2].split("utf-8''")[1]));
                    document.body.appendChild(link);
                    link.click();
                });
            },
            delete() {
                try {
                    window.axios.delete('/file/'+this.delete_id).then((r) => {
                        this.getPage()
                    })
                } catch (e) {
                    console.log(e)
                    this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`
                    this.$root.$children[0].snackbar = true
                }
            }
        },
        watch: {
            page() {
                this.getPage();
            },
            delete_id(nv) {
                if (nv > 0) this.delete()
            }
        }
    }
</script>
