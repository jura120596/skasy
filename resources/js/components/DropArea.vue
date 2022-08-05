<template>
    <div id="drop-area" class="drop-area" :class="$vuetify.breakpoint.smAndDown ? ['drop-sm'] : []">
        <form class="drop-form">
            <input type="file" id="fileElem" multiple accept="image/*"
                   @change="(e) => $emit('change', e)" class="hide">
            <label class="drop-btn" for="fileElem">{{!yet ? 'Загрузить фото' : 'Загрузить еще'}}</label>
            <p class="format-file-desc">Формат – jpg, png</p>
            <p class="file-desc hover">Отпустите фотографию сюда</p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "DropArea",
        data: (vm) => ({vm}),
        props: ['yet'],
        mounted(vm) {
            let dropArea = document.getElementById('drop-area');
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, preventDefaults, false)
            })

            function preventDefaults(e) {
                e.preventDefault()
                e.stopPropagation()
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                dropArea.addEventListener(eventName, focus, false)
            });
            ['dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, unfocus, false)
            });

            function focus(e) {
                dropArea.classList.add('focus')
            }

            function unfocus(e) {
                dropArea.classList.remove('focus')
            }

            const handleDrop = (e) => {
                let dt = e.dataTransfer
                let files = dt.files
                this.handleFiles(files)
            }
            dropArea.addEventListener('drop', handleDrop, false);
        },
        methods: {
            handleFiles(files) {
                this.$emit('change', {target:{files}});
            }
        }
    }
</script>

<style scoped>
    .drop-area:not(.drop-sm) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        background: #FFFFFF;
        border: 1px dashed #AFAFAF;
        border-radius: 8px;
        overflow: hidden;
    }

    #drop-area.focus {
        background: #F8F8F8;
    }

    .hover {
        display: none;
    }

    .focus .hide {
        display: none !important;
    }

    .focus .hover {
        display: block !important;
    }

    p {
        margin-top: 0;
    }

    .drop-area:not(.drop-sm) .drop-form {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 50;
    }


    .drop-btn {
        display: inline-block;
        cursor: pointer;
        min-width: 150px;
        border-radius: 4px;
        height: 35px;
        padding: 10px;
        background: #F8F8F8;
        font-weight: 400;
        font-style: normal;
        line-height: 17px;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: center;
    }
    .drop-sm .drop-btn{
        min-width: 100%;
    }

    #fileElem {
        display: none;
    }

    .file-desc {

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #4A4A4A;
    }

    .drop-sm .file-desc {
        display: none
    }
    .format-file-desc {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #AFAFAF;
    }
</style>
