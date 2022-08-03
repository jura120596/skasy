<template>
    <div class="site-photo-card"
         :class="{focused: focus, filled}"
         @click="$emit('click', $attrs['value']); open=true">
        <div class="site-photo-card-content" style="z-index: 1;">
            <slot name="default">
                <v-img v-if="loaded && src" :src="src" cover
                       height="100%"/>
                <v-row v-else-if="!loaded && !error" xs="12" class="pa-8" style="align-items: center">
                    <progress-bar :progress="progress"/>
                </v-row>
            </slot>
        </div>
        <div class="site-photo-card-actions" style="z-index: 2;">
            <slot name="actions">
                <v-row xs="12" class="pl-5 pr-5 pt-2">
                </v-row>
            </slot>
        </div>
        <v-dialog v-model="open" v-if="open" content-class="sm-photo-dialog"
                  :fullscreen="true">
            <div class="dialog-image">
                <v-img v-if="loaded && src" :src="src" max-height="90vh" contain/>
                <v-btn icon @click="$emit('focusOut'); open=false;"
                       color="gray"
                       class="close-btn" ><v-icon>mdi-close</v-icon></v-btn>
            </div>
        </v-dialog>
    </div>
</template>

<script>
    import {b64ToBlob, compress} from "../../image";
    import ProgressBar from "./ProgressBar";

    export default {
        name: "EditPhotoCard",
        components: {ProgressBar},
        props: {
            focus: {type: Boolean, default: false,},
            preload: {type: Boolean, default: true,},
            cover: {type: String, default: ""},
            filled: {type: Boolean, default: false},
            file: {type: File | String}
        },
        data: (vm) => ({
            open: false,
            focused: !!vm.$attrs['focus'],
            src: '',
            loaded: false,
            error: false,
            progress: 0,
            rotateTimeout: null,
        }),
        mounted() {
            this.upload(this.file)
        },
        computed: {
            isCover() {
                return this.cover && this.src.indexOf(this.cover) !== -1
            }
        },
        methods: {
            rotate() {
                if (this.rotateTimeout) {
                    clearTimeout(this.rotateTimeout);
                    this.rotateTimeout = null;
                }
                this.rotateTimeout = setTimeout(() => {
                    let img = new Image();
                    img.crossOrigin = "anonymous"
                    img.onload = () => {
                        let compressUrl = compress(img, (ctx, canvas) => {
                            ctx.save();
                            ctx.translate(canvas.width / 2, canvas.height / 2);
                            ctx.rotate(90 * Math.PI / 180);
                            ctx.drawImage(img, -img.width / 2, -img.width / 2);
                            ctx.restore();
                        });
                        let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');
                        this.upload(blob, this.src.split('/').reverse()[0]);
                    };
                    img.src = this.src;
                }, 1000)
            },
            readLocalSrc(file) {
                if (this.file instanceof Blob) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        this.src = reader.result;
                        this.$emit('change', this.src)
                    }
                } else this.src = file;
                this.loaded = true;
            },
            upload(file, canvasFileName) {
                if (!this.preload || !(file instanceof Blob)) {
                    this.readLocalSrc(file);
                    return;
                }
                var xhr = new XMLHttpRequest()
                xhr.responseType = 'json';
                var formData = new FormData()
                formData.append('file', file, canvasFileName || file.name)
                xhr.open('POST', '/photo/upload', true)
                xhr.upload.addEventListener("progress", (e) => {
                    this.progress = (e.loaded * 100.0 / e.total) || 100;
                })
                xhr.addEventListener('readystatechange', (e) => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        this.src = e.target.response.url;
                        this.$emit('change', e.target.response.url);
                        this.loaded = true;
                    } else if (xhr.readyState == 4 && xhr.status != 200) {
                        if (xhr.status == 400 && !canvasFileName) {
                            //Для файлов с битым маймтипом рисуем на канве и отправляем результат
                            let img = new Image();
                            img.onload = () => {
                                let compressUrl = compress(img);
                                let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');
                                this.upload(blob, file.name);
                            };
                            img.src = URL.createObjectURL(file);
                            return;
                        }
                        this.readLocalSrc(file)
                        this.error = this.loaded = true;
                    }

                })
                xhr.send(formData)
            }
        },
        watch: {
            file(nv) {
                if (typeof nv === 'string') this.src = nv;
            }
        }
    }
</script>

<style scoped>
    .site-photo-card {
        position: relative;
        width: 100%;
        background: #FFFFFF;
        /* Grey 800 */

        border-radius: 8px;
        overflow: hidden;
    }

    .site-photo-card.filled {
        background-color: #F8F8F8;
    }

    .site-photo-card.focused, .site-photo-card:hover {
        box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);
        border-radius: 8px;
    }

    .site-photo-card:after {
        content: "";
        display: block;
        padding-bottom: 56%; /* 16/9 */
    }

    .site-photo-card-actions {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .site-photo-card-content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .edit-photo-icon {
        margin-left: 8px;
    }
</style>
<style>

    .sm-photo-dialog .photo-cover {
        position: absolute;
        top: 32px;
        left: 32px;
        z-index: 101;
    }

    .sm-photo-dialog .close-btn {
        position: absolute;
        top: 32px;
        right: 32px;
    }

    .sm-photo-dialog .bottom {
        right: 32px;
        bottom: 32px;
        position: absolute;
        width: fit-content;
        display: flex;
        flex-direction: row;
    }

    .sm-photo-dialog {
        position: absolute;
        z-index: 100;
        display: flex;
        box-shadow: none !important;
        background: rgba(105, 109, 116, 0.6);
        backdrop-filter: blur(10px);
        align-items: center;
        justify-content: center;
    }

    .dialog-image .v-image{
        border-radius: 8px;
    }
    .dialog-image {
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        position: relative;
        padding: 16px;
        border-radius: 8px;
        overflow: hidden;
    }
</style>
