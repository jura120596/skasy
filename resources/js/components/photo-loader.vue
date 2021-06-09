<template>
    <v-card class="d-flex flex-column" justify-center align-center elevation="0">
        <input
                type="file"
                id="files"
                @change="addPhoto"
                class="photo-input"
                placeholder="azaz"
                accept="image/jpeg,image/png,image/jpg"
        />

        <v-btn class="btn my-2" @click="clickOnInput">Добавить фотографию</v-btn>
        <div v-if="loadedPhotos.length" class="user-photo-module">
            <v-carousel v-model="n">
                <v-carousel-item
                        v-for="(photo, i) in loadedPhotos"
                        :key="i"
                        :src="photo"
                        contain
                >
                </v-carousel-item>
            </v-carousel>
        </div>
    </v-card>
</template>

<script>

    export default {
        name: 'photo-loader',
        props: {
            radius: {
                type: Number,
            },
        },
        components: {},
        data() {
            return {
                n: 0,
                photo: '',
                loadedPhotos: [],
                fileImg: null,
            }
        },
        methods: {
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
                this.fileImg = event.target.files[0]
                if (this.fileImg.size > 5024000) {
                    this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'
                    this.$root.$children[0].snackbar = true
                    return;
                }
                if(this.loadedPhotos.length > 10) {
                    this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'
                    this.$root.$children[0].snackbar = true
                    return;
                }
                this.loadedPhotos.push(URL.createObjectURL(this.fileImg))
                this.n = this.loadedPhotos.length-1
                this.fileImg = null;
            },
        },
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

    .user-photo-module {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
