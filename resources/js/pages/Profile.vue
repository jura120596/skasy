<template>

    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-toolbar-title align="center" justify="center" class="pa-3">Редактирование профиля</v-toolbar-title>
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
    export default {
        name: "Registration",
        data: (vm) => {
            return ({
                user: {},
                messages: {
                    email: '',
                    name: '',
                    second_name: '',
                    last_name: '',
                    password: '',
                    password_confirmation: '',
                },
                show: false,
            })
        },
        beforeMount() {
                this.user = { ...this.$store.state.auth.user,
                    password: '',
                    password_confirmation: '',
                }
        },
        computed: {
            isFormValid : function () {
                return this.user.email !== this.$store.state.auth.user.email
                    || this.user.second_name !== this.$store.state.auth.user.second_name
                    || this.user.name !== this.$store.state.auth.user.name
                    || this.user.last_name !== this.$store.state.auth.user.last_name
                    || this.user.password && this.user.password_confirmation
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