<template>

    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-toolbar-title v-if="user.points" align="left" class="pl-0 pb-3 ml-0">Вы заслужили {{user.points}} балл(ов)</v-toolbar-title>
                <v-toolbar-title v-else align="center" justify="center" class="pa-3">Редактирование профиля</v-toolbar-title>
                <v-form  @keyup.native.enter="signUp" ref="form">

                    <v-text-field
                            v-model="user.email"
                            :disabled="true"
                            :error-messages="messages.email"
                            label="Ваш E-mail"
                            name="email"
                            type="email"
                    />
                    <v-text-field
                            v-model="user.phone"
                            :disabled="true"
                            :error-messages="messages.phone"
                            label="Ваш телефон"
                            type="phone"
                    />
                    <v-text-field
                            v-model="user.second_name"
                            :error-messages="messages.second_name"
                            label="Фамилия"
                            name="second_name"
                            type="text"
                    />
                    <v-text-field
                            v-model="user.name"
                            :error-messages="messages.name"
                            label="Имя"
                            name="name"
                            type="text"
                    />
                    <v-text-field
                            v-model="user.last_name"
                            :error-messages="messages.last_name"
                            label="Отчество"
                            name="last_name"
                            type="text"
                    />
                    <DistrictAutocomplete
                        :error-messages="messages.district_id"
                        @input="(val) => user.district_id = val"
                        :value="user.district_id"
                        label="Район"
                        placeholder="Введите название района"
                    />
                    <DistrictAutocomplete
                        v-if="user.district_id > 0"
                        :district_id="user.district_id"
                        :error-messages="messages.village_id"
                        @input="(val) => user.village_id = val"
                        :value="user.village_id"
                        level="2"
                        label="Населенный пункт"
                        placeholder="Введите название района"
                    />
                    <v-text-field
                        v-if="user.district_id > 0"
                        :disabled="!user.village_id"
                        label="Улица, дом"
                        v-model="user.address"
                        type="text"
                        :error-messages="messages.address"
                    />
                </v-form>
                <v-form>
                    <v-text-field
                            v-model="user.password"
                            :error-messages="messages.password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                            :type="show ? 'text' : 'password'"
                            label="Пароль"
                            name="password"
                    />
                    <v-text-field
                            v-model="user.password_confirmation"
                            :error-messages="messages.password_confirmation"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                            :type="show ? 'text' : 'password'"
                            label="Подтвердите пароль"
                            name="password"
                    />
                    <v-card
                            class="d-flex justify-center align-center mb-6"
                            flat
                            height="auto"
                            tile
                    >
                        <v-btn color="primary" @click="update"
                               :disabled="!isFormValid">
                            Сохранить
                        </v-btn>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import DistrictAutocomplete from "../components/DistrictAutocomplete";
    export default {
        name: "Registration",
        components: {DistrictAutocomplete},
        data: (vm) => {
            return ({
                user: {},
                messages: {
                    email: '',
                    name: '',
                    second_name: '',
                    address: '',
                    last_name: '',
                    password: '',
                    password_confirmation: '',
                    village_id: '',
                    district_id: '',
                },
                show: false,
            })
        },
        beforeMount() {
                this.user = { ...this.$store.state.auth.user,
                    password: '',
                    password_confirmation: '',
                }
                if (this.user.email) {
                    this.$store.dispatch('auth/attempt', {});
                }
        },
        mounted() {
            this.$store.dispatch('auth/updateProfile', this.$store.state.auth.user)
        },
        computed: {
            isFormValid : function () {
                return this.user.email !== this.$store.state.auth.user.email
                    || this.user.second_name !== this.$store.state.auth.user.second_name
                    || this.user.name !== this.$store.state.auth.user.name
                    || this.user.last_name !== this.$store.state.auth.user.last_name
                    || this.user.address !== this.$store.state.auth.user.address
                    || this.user.password && this.user.password_confirmation
                    || this.user.village_id !== this.$store.state.auth.user.village_id
                    || this.user.district_id !== this.$store.state.auth.user.district_id
            },
        },
        methods :{
            update() {
                this.$store.dispatch('auth/updateProfile', this.user)
                    .then((r) => {
                        console.log(r);
                        Object.keys(this.messages).forEach((k)=> {
                            this.messages[k] =  '';
                        });
                        this.user = {
                            ...r.data.data,
                            password: '',
                            password_confirmation: '',
                        };
                        this.$root.$children[0].snackbarText = 'Данные профиля успешно обновлены';
                        this.$root.$children[0].snackbar = true;
                    })
                    .catch((e) => {
                        console.log(e);
                        if (e?.response?.data?.message || false) {
                            this.$root.$children[0].snackbarText  = e.response.data.message;
                            this.$root.$children[0].snackbar = true;
                        }

                        if (e.response && e.response.status === 422) {
                            let errors = e.response.data.errors
                            Object.keys(this.messages).forEach((k)=> {
                                this.messages[k] = errors[k]?.[0] || '';
                            });
                        }
                    });
            },
        }
    }
</script>

<style scoped>

</style>
