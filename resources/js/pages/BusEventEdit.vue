<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="'Добавление рапсисания'">
        </v-toolbar-title>
        <v-text-field
            type="text"
            name="title"
            label="Мрашрут"
            v-model="event.title"
            :error-messages="messages.title"
            >
        </v-text-field>
        <v-text-field
                name="place"
                label="Остановка"
                v-model="event.place"
                :error-messages="messages.place"
        ></v-text-field>
        <v-text-field
                name="date"
                label="Время отправления"
                v-model="event.time"
                :error-messages="messages.time"
        ></v-text-field>
        <v-spacer/>
        <v-btn class="save-btn"
               color="success"
               fab
               @click="create"
               :disabled="!(event.place && event.title && event.time)"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "PostAdd",
        components: {
        },
        data: (vm) => {
            return {
                event: {
                    id: vm.$route.params.id,
                    title: '',
                    place: '',
                    time: '',
                },
                messages: {
                    title: '',
                    place: '',
                    time:'',
                }
            }
        },
        mounted() {
        },
        methods: {
            create() {
                window.axios.post('/bus/event', this.event)
                    .then((r) => {
                        this.$router.push({name: "bus-events"});
                    }).catch((e) => {
                    if (e.response && e.response.status === 422) {
                        let errors = e.response.data.errors
                        Object.keys(this.messages).forEach((k)=> {
                            this.messages[k] = errors[k]?.[0] || '';
                        });
                    }
                })
            },
        }
    }
</script>

<style>
    .place .v-text-field__slot textarea {
        display: none !important;
    }
    .place.v-text-field>.v-input__control>.v-input__slot:after ,
    .place.v-text-field>.v-input__control>.v-input__slot:before{
        display: none !important;
    }
</style>