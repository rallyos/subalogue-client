<template>
  <section class="sidebar has-text-centered">
    <img alt="Subalogue logo" class="ml-4 mt-2 mb-4" src="../assets/logo.png" width="40" height="40">
    <FMenu/>
  </section>
</template>

<script>

import FMenu from './FMenu.vue'

export default {
  name: 'sidebar',
  props: {},
  components: {
    FMenu
  }
}
</script>

<style scoped>
  .sidebar {
    background-color: #F5F5F5;
    height: 100%;
  }
</style>
