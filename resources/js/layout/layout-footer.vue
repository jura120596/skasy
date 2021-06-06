<template>
  <v-footer app class="app-footer">
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
    heigth: 5vh;
  }
</style>
