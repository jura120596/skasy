<template>
    <v-container class="ma-0 pa-0">
        <div id="mapid"></div>
    </v-container>
</template>

<script>
    export default {
        name: "Map",
        data: (vm) => ({
            mymap : null,
            markers: [
                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],
            ],
            drawControl: null,
        }),
        mounted() {
            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(this.mymap);
            this.markers.forEach((v)=> {
                L.marker(v[0]).addTo(this.mymap)
                    .bindPopup(v[1])
                    .openPopup()
            });
            let editableLayers = new L.FeatureGroup();
            var options = {
                position: 'topright',
                draw: {
                    polyline: false,
                    polygon: {
                        allowIntersection: true, // Restricts shapes to simple polygons
                        drawError: {
                            color: '#e1e100', // Color the shape will turn when intersects
                            message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                        },
                        shapeOptions: {
                            color: '#bada55'
                        }
                    },
                    circlemarker: false, // Turns off this drawing tool
                    rectangle: false,
                    marker: false,
                },
                edit: {
                    featureGroup: editableLayers, //REQUIRED!!
                    remove: true
                }
            };
            this.mymap.addLayer(editableLayers);

            this.drawControl = new L.Control.Draw(options);
            this.mymap.addControl(this.drawControl);
            this.mymap.on(L.Draw.Event.CREATED,  (e) => {
                var type = e.layerType,
                    layer = e.layer;
                if (type === 'marker') {
                    // Do marker specific actions
                }
                // Do whatever else you need to. (save to db; add to map etc)
                this.mymap.addLayer(layer);
            });
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