<template>
    <v-container class="ma-0 pa-0">
        <div id="mapid"></div>
    </v-container>
</template>

<script>
    export default {
        name: "Map",
        mounted() {
            var mymap = L.map('mapid').setView([55.536446, 47.498600], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);
        },
        methods: {

        }
    }
</script>

<style scoped>
    #mapid {
        min-height: 200px;
        height: 95vh;
    }
</style>