<template>
    <v-card class="d-flex flex-column pt-4 pb-4" justify-center align-center elevation="0">
        <div v-if="one && loadedPhotos.length" class="text-center">{{loadedPhotos[0].name}}</div>
        <v-row v-if="!one" class="user-photo-module">
            <v-col xs="6" md="3" sm="6" v-for="(photo, i) in carouselPhotos" :key="i" v-if="!!carouselPhotos[i]">
                <edit-photo-card
                        :preload="preload"
                        :filled="true"
                        :file="photo"
                        @delete="() => deletePhoto(photo, i)"
                        contain
                />
            </v-col>
            <v-col xs="6" md="3" sm="6">
                <edit-photo-card
                    @click="() => $refs.btn.click()">
                    <drop-area @change="addPhoto" :yet="carouselPhotos.length"/>
                    <template v-slot:actions>
                        <div class="hidden"></div>
                    </template>
                </edit-photo-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

    import EditPhotoCard from "./EditPhotoCard";
    import DropArea from "./DropArea";

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
        components: {DropArea, EditPhotoCard},
        data: (vm) => ({
                n: 0,
                photo: '',
                loadedPhotos: [],
                deleted: [],
                carouselPhotos: vm.photos,
                fileImg: null,
        }),
        updated() {
        },
        methods: {
            deletePhoto(photo, cpi) {
                if (photo.name) {
                    this.loadedPhotos.forEach((file, i) => {
                        if (file.name === photo.name) delete this.loadedPhotos[i];
                    });
                } else {
                    this.deleted.push(this.photos[cpi].id);
                }
                delete this.carouselPhotos[cpi];
                this.carouselPhotos = [...this.carouselPhotos];
            },
            getPhotos() {
                return this.loadedPhotos.concat(this.deleted);
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
            addPhoto(files) {
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
                console.log(123);
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
</style>
