<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Ближайшие мероприятия'">
        </v-toolbar-title>
        <div v-if="events.length > 0">
            <v-container>
                <v-timeline dense>
                    <div v-for="(entry, index) in events" :key="index" style="position: relative">

                        <div v-if="$store.state.auth.user.role === 1024"
                             class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                            <v-btn color="red"
                                   fab
                                   small
                                   @click="delete_id = entry.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn
                                    color="yellow"
                                    fab
                                    small
                                    @click="$router.push('/event/'+entry.id)"
                                    dark>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </div>
                        <v-timeline-item
                                small
                                left
                                :color="'#11a506'"
                        >
                            <v-card elevation="0" class="container ma-0 pa-0 d-flex flex-column">
                                <h4>{{ entry.title }}</h4>
                                <span>Место проведения: {{ entry.place }}</span>
                                <span v-if="entry.points > 0">{{ entry.points }} баллов благодарности</span>
                                <span
                                        class="text-right history-time"
                                        :title="entry.date"
                                >
                                <span>{{ entry.date }}</span>
                            </span>
                            </v-card>
                        </v-timeline-item>
                    </div>
                </v-timeline>
            </v-container>
            <div class="text-center xs-12" v-if="l > 1">
                <v-pagination
                        :length="l"
                        :total-visible="3"
                        v-model="page"
                ></v-pagination>
            </div>
        </div>
        <div v-else>
            <div class="text-center my-3">Новостей пока нет</div>
        </div>

        <v-btn class="save-btn"
               v-if="$store.state.auth.user.role === 1024"
               color="success"
               fab
               @click="$router.push('/event/0')"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "Events",
        data: (vm) => {
            return {
                l: 1,
                events: [],
                page: 1,
                dialogPost: null,
                delete_id: 0,
                show: false
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            getPage() {
                window.axios.get('/event/', {params: {page: this.page, per_page: 10}}).then((response) => {
                    this.events = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            },
            delete() {
                if (this.delete_id > 0)
                    window.axios.delete('/event/' + this.delete_id).then((response) => {
                        this.getPage()
                        this.delete_id = 0
                    }).catch((e) => {
                        console.log(e);
                    });
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