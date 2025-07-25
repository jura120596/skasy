<template>
    <div class="ma-0 pa-0" style="position: relative; display: flex;">
        <div id="mapid"></div>
        <v-dialog v-model="show">
            <v-container map-top-dialog>
                <v-card elevation="0">
                    <v-card-title>Создание зоны</v-card-title>
                    <v-card-text>
                        <v-text-field
                                v-model="place.name"
                                label="Название"/>
                        <v-text-field
                                v-model="place.points"
                                type="number"
                                label="Баллы благодарности"/>
                        <v-color-picker
                                dot-size="32"
                                hide-canvas
                                hide-mode-switch
                                mode="hexa"
                                v-model="place.color"
                                swatches-max-height="200"
                        ></v-color-picker>
                        <v-btn color="dark" @click="save" :disabled="place.name == ''">
                            Сохранить
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "Map",
        data: (vm) => ({
            mymap : null,
            editableLayers:new L.FeatureGroup(),
            places: [],
            place: {},
            show: false,
            drawControl: null,
        }),
        mounted() {
            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);
            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            })
            // osm.addTo(this.mymap)
            var options = {
                position: 'topright',
                draw: {
                    polyline: false,
                    polygon: {
                        allowIntersection: true, // Restricts shapes to simple polygons
                        drawError: {
                            color: '#e1e100', // Color the shape will turn when intersects
                            message: 'Вы не может поставить тут точку' // Message that will show when intersect
                        },
                        shapeOptions: {
                            color: '#bada55'
                        }
                    },
                    circle: false, // Turns off this drawing tool
                    circlemarker: false, // Turns off this drawing tool
                    rectangle: false,
                    marker: true,
                },
                edit: {
                    featureGroup: this.editableLayers, //REQUIRED!!
                    remove: true,
                    edit: true,
                }
            };
            this.mymap.addLayer(this.editableLayers);

            this.drawControl = new L.Control.Draw(options);
            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);
            this.mymap.on(L.Draw.Event.CREATED,  (e) => {
                var type = e.layerType,
                    layer = e.layer;
                this.place = {
                    coords: e.layerType === 'point' ? layer._latlngs : layer._latlng,
                    layer,
                    type,
                };
                this.show = true;
            });
            this.mymap.on(L.Draw.Event.EDITED,  (e) => {
                if (Object.values(e.layers._layers).length !== 1) {
                    if (Object.values(e.layers._layers).length>1) {
                        alert('Редактировать можно только 1 объект');
                        window.location.reload();
                    }
                    return;
                }
                Object.values(e.layers._layers).forEach((l) => {
                    this.place = {
                        ...l.place,
                        coords: l._latlngs,
                        layer:l,
                    };
                    this.show = true;
                });
            });
            this.mymap.on(L.Draw.Event.DELETED,  (e) => {
                Object.values(e.layers._layers).forEach((l) => {
                    this.delete(l.place);
                })
            });

            this.getPlaces();
        },
        methods: {
            addDivMarker(coords, color, popup) {
                const myCustomColour = color.substr(0,7);
                const markerHtmlStyles = `background-color: ${myCustomColour}; width: 2rem;height: 2rem;display: block;
                          left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF`
                const icon = L.divIcon({
                    className: "my-custom-pin",
                    iconAnchor: [0, 24],
                    labelAnchor: [-6, 0],
                    popupAnchor: [0, -36],
                    html: `<span style="${markerHtmlStyles}" />`
                });
                L.marker(coords, {icon})
                    .addTo(this.mymap)
                    .bindPopup(popup);
            },
            getPlaces() {
                window.axios.get('/mapObject', {params: {}}).then((response) => {
                    this.places = response.data.data;
                    this.places.filter((v) => v.type === 'polygon').forEach((p,i) => {
                        let polygon = L.polygon(p.coords, {color: p.color});
                        polygon.addTo(this.mymap)
                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));
                        this.places[i].polygon = polygon;
                        polygon.place = p;
                        this.editableLayers.addLayer(polygon);
                    })
                    this.places.filter((v) => v.type === 'marker').forEach((p,i) => {
                       this.addDivMarker({lat:p.lat, lng:p.lng}, p.color, p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));
                    })
                }).catch((e) => {
                    console.log(e);
                });
            },
            save() {
                let data = {
                    id: this.place.id,
                    color: this.place.color,
                    coords: this.place.coords,
                    name: this.place.name,
                    points: this.place.points,
                    type: this.place.type,
                };
                data.color = data.color.hexa || data.color;
                window.axios[data.id ?'put' : 'post']('/mapObject'+(data.id? '/' + data.id : ''), data).then((response) => {
                    this.getPlaces();
                    this.place = {};
                    this.show = false;
                    // this.mymap.addLayer(this.place.layer);
                }).catch((e) => {
                    alert('Ошибка. Проверьте данные.');
                    console.log(e);
                });
            },
            delete(place){
                window.axios.delete('/mapObject/'+place.id).then((response) => {
                    this.getPlaces();
                }).catch((e) => {
                    console.log(e);
                });
            }
        }
    }
</script>

<style scoped>
    #mapid {
        min-height: calc(100vh - 64px);
        position:absolute;
        height: calc(100vh - 64px);
        width: 100%;
    }
    .map-top-dialog{
        z-index: 10001 !important;
    }
</style>
