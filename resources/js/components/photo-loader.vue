<template>
    <v-card class="d-flex flex-column" justify-center align-center elevation="0">
        <input
                type="file"
                id="files"
                multiple
                @change="addPhoto"
                class="photo-input"
                placeholder="azaz"
                accept="image/jpeg,image/png,image/jpg"
        />

        <v-btn class="btn my-2" @click="clickOnInput" v-if="!one || !carouselPhotos.length">Добавить фотографию</v-btn>
        <div v-if="one && loadedPhotos.length" class="text-center">{{loadedPhotos[0].name}}</div>
        <v-row v-if="!one && carouselPhotos.length" class="user-photo-module">
            <v-col xs="6" md="3" sm="6" v-for="(photo, i) in carouselPhotos" :key="i">
                <edit-photo-card
                        :preload="preload"
                        :filled="true"
                        :file="photo"
                        contain
                >
                </edit-photo-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

    import EditPhotoCard from "./EditPhotoCard";

    export default {
        name: 'photo-loader',
        props: {
            radius: {
                type: Number,
            },
            one: {
                type: Boolean,
                default: false,
            },
            photos: {
                type: Array,
                default: () => ([]),
            },
            preload: {
                type: Boolean,
                default: false,
            }
        },
        components: {EditPhotoCard},
        data: (vm) => ({
                n: 0,
                photo: '',
                loadedPhotos: [],
                carouselPhotos: vm.photos,
                fileImg: null,
        }),
        methods: {
            getPhotos() {
                return this.loadedPhotos;
            },
            getFirst() {
                return this.loadedPhotos[0];
            },
            returnFormData(val) {
                this.$emit('save-photo', val)
            },
            updatePhoto(val) {
                this.photo = val
                this.showCropperDialog = false
            },
            clickOnInput() {
                document.getElementById('files').files = (new DataTransfer()).files;
                document.getElementById('files').click()

            },
            addPhoto(event) {
                [...event.target.files].forEach((photo) => {
                    this.fileImg = photo;
                    if (this.fileImg.size > 5024000) {
                        this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'
                        this.$root.$children[0].snackbar = true
                        return;
                    }
                    if (this.loadedPhotos.length > 10) {
                        this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'
                        this.$root.$children[0].snackbar = true
                        return;
                    }
                    this.carouselPhotos.push(this.preload ? URL.createObjectURL(this.fileImg) : this.fileImg)
                    this.loadedPhotos.push(this.fileImg)
                    this.n = this.loadedPhotos.length - 1
                    this.fileImg = null;
                })
            },
        },
        watch: {
            photos(nv) {
                this.carouselPhotos = nv.map((file) => file.file);
            }
        }
    }
</script>

<style scoped>
    .photo-input {
        position: absolute;
        visibility: hidden;
    }

    .user-photo {
        border-radius: 200px;
        width: 300px;
        height: auto;
        max-height: 500px;
        border: 1px solid #01aefe;
    }
</style>
