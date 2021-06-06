<template>
  <v-app-bar app clipped-left>
    <v-img
            height="100%"
            class="app-nav-logo"
            contain
            src="/img/logo.png"
    ></v-img>
      <v-app-bar-nav-icon v-on:click="$emit('toggleDrawer')" />
      <v-btn to="/" icon>
        <v-avatar size="30">
          <img
                  src="/img/dashboard_icon.png"
                  alt="John"
          >
        </v-avatar>
      </v-btn>
      <v-btn to="/" plain>{{$store.state.appName}}
      </v-btn>

      <v-spacer />
      <v-divider light vertical inset></v-divider>

      <v-avatar size="30">
        <img
                src="/img/clock_icon.png"
                alt="John"
        >
      </v-avatar>
      <v-divider light vertical inset></v-divider>
    <v-btn to="/" icon>
      <v-avatar size="30">
        <img
                src="/img/bell_icon.png"
                alt="John"
        >
      </v-avatar>
    </v-btn>
      <v-divider light vertical inset></v-divider>
      <v-btn to="/profile" icon>
        <v-avatar size="30">
          <img
                  src="/img/profile_icon.png"
                  alt="John"
          >
        </v-avatar>
      </v-btn>
      <v-btn to="/" plain>{{$store.state.auth.user.name}}
      </v-btn>
      <v-btn plain @click="logout()">Выйти
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
      initDrawers: Object,
  },
  data:  function() {
      return {
          timestamp: "",
          drawers: this.initDrawers
      }
  },
  methods: {
    logout() {

      this.$store.dispatch('auth/toggleLoggingOut', true);
      this.$store.dispatch('auth/logout')
        .catch(err => console.log(err));
    },
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
      if (this.intervalId) clearInterval(this.intervalId)
  },
};
</script>

<style scoped>

</style>
