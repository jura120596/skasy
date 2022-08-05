<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'История баллов'">
        </v-toolbar-title>
        <div v-if="events.length > 0">
            <v-container>
                <v-timeline dense>
                    <div v-for="(entry, index) in events" :key="index" style="position: relative">
                        <v-timeline-item
                                small
                                left
                                :color="entry.map_object.color"
                        >
                            <v-card elevation="0" class="container ma-0 pa-0 d-flex flex-column">
                                <h4>{{ entry.map_object.name  }}</h4>
                                <span>{{ entry.points }} баллов благодарности</span>
                                <span
                                        class="text-right history-time"
                                        :title="entry.created_at"
                                >
                                <span>{{ entry.created_at }}</span>
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
            <div class="text-center my-3">Мы еще не знаем, где вы использовали баллы</div>
        </div>

    </v-container>
</template>

<script>
    export default {
        name: "UserPointsHistory",
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
                window.axios.get('/user/event/', {params: {page: this.page, per_page: 10}}).then((response) => {
                    this.events = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            }
        },
        watch: {
            page() {
                this.getPage();
            },
        }
    }
</script>