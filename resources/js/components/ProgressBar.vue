<template>
    <v-row class="ma-0">
        <div class="full">
            <div class="active" :style="{width: progress+'%'}"/>
        </div>
    </v-row>
</template>

<script>
    export default {
        props: ['progress'],
        name: "ProgressBar"
    }
</script>

<style scoped>
    .full{
        width: 100%;
        position: relative;
        height: 4px;
        background: #E1E1E1;
        border-radius: 2px;
    }
    .active{
        height: 4px;
        background: #2e3e4e !important;
        border-radius: 2px;
    }
</style>