<template>
  <section class="sidebar">
    <img alt="Subalogue logo" class="pt-4 pb-5" id="logo" src="@/assets/logo.png" width="40" height="40">
    <FMenu/>
  </section>
</template>

<script>
import FMenu from './FMenu.vue'

export default {
  name: 'sidebar',
  data: () => ({ }),
  props: {},
  components: {
    FMenu,
  }
}
</script>

<style scoped>
  #logo {
    display: block;
    margin: 0 auto;
  }
  .sidebar {
    background-color: #F5F5F5;
    height: 100%;
  }
</style>
