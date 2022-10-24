<template>

    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-toolbar-title align="center" justify="center">{{$store.state.appName}}
                </v-toolbar-title>
                <v-toolbar-title align="center" justify="center">Регистрация</v-toolbar-title>
                <v-form  @keyup.native.enter="signUp" ref="form">

                    <v-text-field
                            v-model="account.email"
                            :error-messages="messages.email"
                            label="Введите ваш E-mail"
                            name="email"
                            type="email"
                    />
                    <v-text-field
                            v-model="account.phone"
                            :error-messages="messages.phone"
                            label="Введите ваш телефон"
                            prefix="+7"
                            name="phone"
                            type="number"
                    />
                    <v-text-field
                            v-model="account.second_name"
                            :error-messages="messages.second_name"
                            label="Фамилия"
                            name="second_name"
                            type="text"
                    />
                    <v-text-field
                            v-model="account.name"
                            :error-messages="messages.name"
                            label="Имя"
                            name="name"
                            type="text"
                    />
                    <v-text-field
                            v-model="account.last_name"
                            :error-messages="messages.last_name"
                            label="Отчество"
                            name="last_name"
                            type="text"
                    />
                    <DistrictAutocomplete
                        :error-messages="messages.district_id"
                        @input="(val) => account.district_id = val"
                        label="Район"
                        placeholder="Введите название района"
                    />
                    <DistrictAutocomplete
                        v-if="account.district_id > 0"
                        :district_id="account.district_id"
                        :error-messages="messages.village_id"
                        @input="(val) => account.village_id = val"
                        level="2"
                        label="Населенный пункт"
                        placeholder="Введите название района"
                    />
                    <v-text-field
                        v-if="account.district_id > 0"
                        :disabled="!account.village_id"
                        label="Улица, дом"
                        v-model="account.address"
                        type="text"
                        :error-messages="messages.address"
                    />
                    <v-checkbox
                            v-model="account.accept"
                            :error-messages="messages.accept"
                            label="Я принимаю, пользовательское соглашение"
                            color="success"
                            value="1"
                            name="accept"
                            hide-details
                    ></v-checkbox>
                    <v-card
                            class="d-flex justify-center align-center mb-6"
                            flat
                            height="auto"
                            tile
                    >
                        <v-btn color="primary" @click="signUp"
                               :disabled="!isFormValid">
                            Зарегистрироваться
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
        data: (vm) => ({
            account: {
                email: '',
                name: '',
                second_name: '',
                last_name: '',
                password: '',
                password_confirmation: '',
                phone: '',
                address: '',
                accept: false,
                district_id: null,
                village_id: null,
            },
            messages: {
                phone: '',
                email: '',
                name: '',
                second_name: '',
                last_name: '',
                address: '',
                password: '',
                password_confirmation: '',
                accept: '',
                district_id: '',
                village_id: '',
            },
        }),
        computed: {
            isFormValid : function() {
                return this.account.email
                    && this.account.second_name
                    && this.account.name
                    && this.account.accept
                    && this.account.phone
                    && this.account.district_id
                    && this.account.village_id
            },
        },
        methods :{
            signUp() {
                this.isFormValid && window.axios.post('/auth/signup', this.account)
                    .then((r) => {
                        this.$root.$children[0].snackbarText = r.data.message;
                        this.$root.$children[0].snackbar = true;
                        this.$router.push('/login')
                    }).catch((e) => {
                        if (e.response && e.response.status === 422) {
                            let errors = e.response.data.errors
                            Object.keys(this.messages).forEach((k)=> {
                                this.messages[k] = errors[k]?.[0] || '';
                            });
                        }
                })
            },
        },
    }
</script>

<style scoped>

</style>
