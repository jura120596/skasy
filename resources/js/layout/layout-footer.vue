<template>
  <v-footer app class="app-footer">
    <v-spacer/>
    <v-app-bar-nav-icon v-on:click="$emit('toggleDrawer')" />
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
