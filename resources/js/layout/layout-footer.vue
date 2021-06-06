<template>
  <v-footer app>
    <v-app-bar-nav-icon v-on:click="$emit('toggleDrawer')" />
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
};
</script>

<style scoped>

</style>
