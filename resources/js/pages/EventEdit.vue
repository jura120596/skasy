<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="'Добавление мероприятия'">
        </v-toolbar-title>
        <v-text-field
            type="text"
            name="title"
            label="Заголовок"
            v-model="event.title"
            :error-messages="messages.title"
            >
        </v-text-field>
        <v-text-field
                name="place"
                label="Место проведения"
                v-model="event.place"
                :error-messages="messages.place"
        ></v-text-field>
        <v-text-field
                name="date"
                label="Дата проведения"
                v-model="event.date"
                :error-messages="messages.date"
        ></v-text-field>
        <v-text-field
                name="points"
                label="Баллы за участие"
                v-model="event.points"
                :error-messages="messages.points"
        ></v-text-field>
        <v-spacer/>
        <v-btn class="save-btn-text"
               color="success"
               @click="save"
               :disabled="!(event.place && event.title && event.date)">
            Сохранить
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
                    date: '',
                    points: 0,
                },
                messages: {
                    title: '',
                    place: '',
                    date:'',
                }
            }
        },
        mounted() {
            let modelId = this.$route.params.id;
            if (modelId != 0) {
                window.axios.get('/event/'+ modelId).then((response) => {
                    this.event = response.data.data;
                }).catch((e) => {
                    console.log(e);
                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';
                    this.$root.$children[0].snackbar = true;
                });
            }
        },
        methods: {
            save() {
                window.axios[this.event.id ? 'put' : 'post']('/event/' + (this.event.id || ''), this.event)
                    .then((r) => {
                        this.$router.push({name: "events"});
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