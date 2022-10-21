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
                    <v-text-field
                        label="Адрес"
                        v-model="account.address"
                        type="text"
                        :error-messages="messages.address"
                    />
                    <v-autocomplete
                        v-model="account.district_id"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="white"
                        hide-no-data
                        hide-selected
                        item-text="Description"
                        item-value="API"
                        label="Район"
                        placeholder="Введите название района"
                        prepend-icon="mdi-database-search"
                        return-object
                    ></v-autocomplete>
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
    export default {
        name: "Registration",
        data: (vm) => ({
            entries: [],
            isLoading: false,
            search: null,
            descriptionLimit: 60,
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
            },
        }),
        computed: {
            isFormValid : function() {
                return this.account.email
                    && this.account.second_name
                    && this.account.name
                    && this.account.accept
                    && this.account.phone
            },
            items () {
                return this.entries.map(entry => {
                    return {value: entry.id, text: entry.name};
                })
            }
        },
        methods :{
            signUp() {
                window.axios.post('/auth/signup', this.account)
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
        watch: {
            search (val) {
                // Items have already been loaded
                if (this.items.length > 0) return

                // Items have already been requested
                if (this.isLoading) return

                this.isLoading = true

                // Lazily load input items
                window.axios.get('/district?'+(new URLSearchParams({name: val, level:1, per_page:-1}).toString()), )
                    .then(res => {
                        this.count = res.data.total
                        this.entries = res.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
            },
        }
    }
</script>

<style scoped>

</style>
