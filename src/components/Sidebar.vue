<template>
  <section class="sidebar">
    <img alt="Subalogue logo" id="logo" src="../assets/logo.png" width="40" height="40">
    <b-button id="add-button"
              class="mb-4"
              icon-size="is-medium"
              icon-pack="fal"
              icon-left="layer-plus">
    Add Subscription
    </b-button>
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
  #logo {
    display: block;
    margin: 1em auto 1.5em;
  }
  #add-button {
    display: block;
    margin: 0 auto;
    font-size: 0.95em;
    background-color: #fbfbfb;
  }
  .sidebar {
    background-color: #F5F5F5;
    height: 100%;
  }
</style>
