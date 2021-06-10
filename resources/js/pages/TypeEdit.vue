<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
        v-text="'Добавление типа заявки'">
        </v-toolbar-title>
        <v-text-field
            type="text"
            name="title"
            label="Название"
            v-model="model.name"
            :error-messages="messages.name"
            >
        </v-text-field>
        <v-spacer/>
        <v-btn class="save-btn"
               color="success"
               fab
               @click="create"
               :disabled="!(model.name)"
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
                model: {
                    id: vm.$route.params.id,
                    name: '',
                },
                messages: {
                    name: '',
                }
            }
        },
        mounted() {
        },
        methods: {
            create() {
                window.axios.post('/type', this.model)
                    .then((r) => {
                        this.$store.state.types.push({
                            value: r.data.data.id,
                            text: r.data.data.name
                        })
                        this.$router.push({name: "types"});
                    }).catch((e) => {
                        console.log(e);
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