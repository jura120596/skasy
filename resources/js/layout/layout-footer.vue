<template>
  <v-footer app class="app-footer">
    <span style="height: 100%;width: ( 100% - 30px); vertical-align: center; position: absolute"
          class="text-center d-flex justify-center align-center">{{$store.state.appName}}</span>
    <v-spacer/>
    <v-app-bar-nav-icon style="width: 45px" v-on:click="$emit('toggleDrawer')" />
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
};
</script>

<style scoped>
  .app-footer {
    z-index: 1000;
    height: 8vh;
  }
</style>
