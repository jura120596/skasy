<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-img
                        max-height="100"
                        max-width="100%"
                        src="/img/logo.png"
                ></v-img>
                <v-toolbar-title align="center" justify="center" style="margin-bottom:60px">{{$store.state.appName}}
                </v-toolbar-title>
                <v-toolbar-title align="center" justify="center">Авторизация</v-toolbar-title>
                <v-form @keyup.native.enter="attemptLogin" ref="form">
                    <v-text-field
                            v-model="account.email"
                            :rules="[rules.required, rules.emailMatch]"
                            label="Введите ваш E-mail"
                            name="email"
                            type="email"
                    />
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    v-model="account.password"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.sendResult, rules.passwordMatch]"
                                    :type="show ? 'text' : 'password'"
                                    name="password"
                                    label="Пароль"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click:append="show = !show"
                            ></v-text-field>
                        </template>
                        <span>{{'Не меньше ' + $store.state.passwordLength + ' символов'}}</span>
                    </v-tooltip>
                    <v-card
                            class="d-flex justify-center align-center mb-6"
                            flat
                            height="auto"
                            tile
                    >
                        <v-btn color="primary" @click="attemptLogin"
                               :disabled="!isFormValid">
                            Войти
                        </v-btn>
                    </v-card>
                    <v-divider></v-divider>
                    <v-card
                            class="d-flex justify-center align-center mb-6"
                            flat
                            height="auto"
                            tile
                    >
                        <v-dialog
                                v-model="resetDialogShow"
                                transition="dialog-top-transition"
                                max-width="600"
                                :fullscreen="$vuetify.breakpoint.mobile"
                                ref="resetDialog"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <a
                                        v-bind="attrs"
                                        v-on="on"
                                        @click="resetDialogShow = true"
                                >Забыли пароль?</a>
                            </template>
                            <template v-slot:default="dialog">
                                <v-card>

                                    <v-toolbar  class="container py-1 my-0 justify-space-between">
                                        <v-toolbar-title>
                                            <span class="headline">Забыли пароль?</span>
                                        </v-toolbar-title>
                                        <v-spacer/>
                                        <v-toolbar-title><v-icon
                                                class="flex-grow-0"
                                                text
                                                @click="dialog.value = false">X</v-icon>
                                        </v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <v-container>
                                            <v-col>

                                                <v-card-text>
                                                    Введите Email, который Вы использовали для входа, Вам будет направлена ссылка для восстановления пароля.
                                                </v-card-text>
                                                <v-form @keyup.native.enter="attemptReset">
                                                    <v-text-field
                                                            v-model="account.email"
                                                            label="Введите ваш E-mail"
                                                            :rules="[rules.required, rules.emailMatch]"
                                                            name="email"
                                                            type="email"
                                                            required
                                                    />
                                                    <v-card
                                                            class="d-flex justify-center align-center"
                                                            flat
                                                            height="auto"
                                                            tile
                                                    >
                                                        <v-btn color="dark" @click="attemptReset" :disabled="account.email.toString() == ''">
                                                            Отправить ссылку
                                                        </v-btn>
                                                    </v-card>
                                                </v-form>
                                            </v-col>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </template>
                        </v-dialog>

                        <v-dialog
                                transition="dialog-top-transition"
                                max-width="600"
                                ref="resetResultDialog"
                                :fullscreen="$vuetify.breakpoint.mobile"
                                v-model="resetResult"
                        >

                            <template v-slot:default="resultDialog">
                                <v-card>

                                    <v-toolbar>

                                        <v-row
                                                no-gutters
                                                style="flex-wrap: nowrap;"
                                        >
                                            <v-col
                                                    cols="1"
                                                    style="min-width: 100px; max-width: 100%;"
                                                    class="flex-grow-1 flex-shrink-0"
                                            >
                                                <v-list-item
                                                        class=" justify-center"
                                                        outlined
                                                        tile
                                                >
                                                    <v-card-title>
                                                        <span class="headline">Проверьте почту</span>
                                                    </v-card-title>
                                                </v-list-item>
                                            </v-col>
                                        </v-row>
                                    </v-toolbar>
                                    <v-card-text>
                                        <v-container>
                                            <v-col>
                                                <v-card-text>
                                                    {{resultMessage}}
                                                </v-card-text>
                                                <v-divider></v-divider>

                                                <v-card-actions  justify="center" >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                            color="dark"
                                                            @click="resetResult = false"
                                                    >Закрыть</v-btn>
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-col>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </template>
                        </v-dialog>


                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
  name: 'Login',
  data: (vm) => ({
    account: {
      email: '',
      password: ''
    },
    resetDialogShow: false,
    resetResult: false,
    resultMessage: '',
    show: false,
    responseMessage: false,
    rules: {
        required: value => !!value || 'Обязательно для заполнения.',
        sendResult: value => {
            if (vm.responseMessage !== false) {
                let msg =  vm.responseMessage === undefined ? false : vm.responseMessage;
                vm.responseMessage = false;
                return msg;
            }
            return true;
        },
        emailMatch: value => {
            if (vm.responseMessage !== false) return ' ';
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Некорректный e-mail.'
        },
        passwordMatch: v => {
            return (v.length >= vm.$store.state.passwordLength) || (`Пароль не указан или содержит менее ` + vm.$store.state.passwordLength + ` символов`);
        }
    },
  }
  ),
  mounted() {
    this.$store.dispatch('auth/toggleLoggingOut', false);
  },
  computed: {
      emailValid : function() {
          return this.rules.emailMatch(this.account.email) === true;
      },

      isFormValid : function() {
          return this.rules.passwordMatch(this.account.password) === true && this.emailValid;
      },
  },
  methods: {
      validate () {
          this.$refs.form.validate();
          this.responseMessage  = false;
      },
      async attemptLogin() {
          let vm = this;
          await this.$store.dispatch('auth/login', this.account)
              .then(() => this.$router.replace('/'))
              .catch(err => {
                  if (err.response.data.message) vm.responseMessage = err.response.data.message;
                  vm.validate();
              });
      },
      async attemptReset() {
          let vm = this;
          vm.resetDialogShow = false;
          await this.$store.dispatch('auth/reset', this.account)
              .then((res) => {
                  vm.resultMessage = res.data.message;
                  vm.resetResult = true;
              })
              .catch(err => {

                        let emailErrs;
                        if(err.response.status === 403)
                            vm.resultMessage = err.response.data.message;
                        else if (err.response.status === 422  && (emailErrs = err.response.data.errors) !== undefined
                            && emailErrs.email[0])
                            vm.resultMessage = emailErrs.email[0];
                        else
                            vm.resultMessage = 'Произошла ошибка, пожалуйста проверьте введенный адрес и потворите попытку.';
                        vm.validate();
                        vm.resetResult = true;
                    } );
            },
        },
    };
</script>

<style scoped>

</style>
