<template>
  <v-app-bar app clipped-left class="header">
    <v-img
            height="100%"
            class="app-nav-logo"
            contain
            src="/img/logo.png"
    ></v-img>
      <v-app-bar-nav-icon v-on:click="$emit('toggleDrawer')" />
      <v-btn to="/map" icon>
        <v-avatar size="30">
          <img
                  src="/img/icons/android-chrome-192x192.png"
                  alt="John"
          >
        </v-avatar>
      </v-btn>
      <v-btn to="/map" plain>{{$store.state.appName}}
      </v-btn>

      <v-spacer />

      <v-divider light vertical inset></v-divider>
      <v-btn to="/profile" icon>

        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/profile" plain>{{$store.state.auth.user.full_name}}
      </v-btn>
      <v-btn plain @click="$emit('logout')">Выйти
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
  .header{
    z-index: 1001;
  }
</style>
