<template>
    <v-container
            class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Редактирование пользователя'">
        </v-toolbar-title>
        <v-text-field
                label="Имя"
                v-model="user.name"
                :disabled="!isAdmin"
                :error-messages="messages.name"
        />
        <v-text-field
                label="Фамилия"
                v-model="user.second_name"
                :disabled="!isAdmin"
                :error-messages="messages.second_name"
        />
        <v-text-field
                label="Отчество"
                v-model="user.last_name"
                :disabled="!isAdmin"
                :error-messages="messages.last_name"
        />
        <v-text-field
                label="Почта"
                v-model="user.email"
                :disabled="!isAdmin"
                :error-messages="messages.email"
        />
        <v-text-field
                label="Телефон"
                v-model="user.phone"
                counter="10"
                :disabled="!isAdmin"
                :error-messages="messages.phone"
        />
        <v-text-field
                label="Баллы"
                v-model="user.points"
                :error-messages="messages.points"
        />
        <v-text-field
                label="Номер карты"
                v-model="user.card_id"
                :disabled="!isAdmin"
                :error-messages="messages.card_id"
        />
        <DistrictAutocomplete
            v-if="user.district_id !== undefined"
            :error-messages="messages.district_id"
            @input="(val) => user.district_id = val"
            :value="user.district_id"
            :disabled="!isAdmin"
            label="Район"
            placeholder="Введите название района"
        />
        <DistrictAutocomplete
            v-if="user.district_id && user.village_id !== undefined"
            :district_id="user.district_id"
            :error-messages="messages.village_id"
            @input="(val) => user.village_id = val"
            :value="user.village_id"
            :disabled="!isAdmin"
            level="2"
            label="Населенный пункт"
            placeholder="Введите название района"
        />
        <v-text-field
            :disabled="!user.village_id || !isAdmin"
            label="Улица, дом"
            v-model="user.address"
            :error-messages="messages.address"
        />
        <v-checkbox
                v-if="isAdmin"
                label="Староста"
                v-model="user.curator"
        />
        <v-spacer/>
        <v-btn class="save-btn-text"
               color="success"
               @click="save"
               :disabled="!isAdmin || !(user.name && user.second_name && user.email&& user.phone)">
            Сохранить
        </v-btn>
    </v-container>
</template>

<script>
    import DistrictAutocomplete from "../components/DistrictAutocomplete";
    export default {
        name: "UserEdit",
        components: {DistrictAutocomplete},
        data: (vm) => {
            return {
                user: {},
                messages: {
                    name: '',
                    second_name: '',
                    last_name: '',
                    address: '',
                    email: '',
                    phone: '',
                    points: '',
                    card_id: '',
                    village_id: '',
                    district_id: '',
                }
            }
        },
        computed: {
            isAdmin() {
                return this.$store.state.auth.user.role >= 1024;
            },
        },
        mounted() {
            let modelId = this.$route.params.id;
            if (modelId != 0) {
                window.axios.get('/user/' + modelId).then((response) => {
                    this.user = {...response.data.data};
                }).catch((e) => {
                    console.log(e);
                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';
                    this.$root.$children[0].snackbar = true;
                });
            }
        },
        methods: {
            save() {
                window.axios.put('/user/' + (this.user.id), this.user)
                    .then((r) => {
                        this.$router.push({name: "users"});
                    }).catch((e) => {
                    if (e.response && e.response.status === 422) {
                        let errors = e.response.data.errors
                        Object.keys(this.messages).forEach((k) => {
                            this.messages[k] = errors[k]?.[0] || '';
                        });
                    }
                })
            },
        }
    }
</script>
