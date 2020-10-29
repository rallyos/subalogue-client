<template>
  <section class="sidebar">
    <img alt="Subalogue logo" class="ml-5 mt-2 mb-4" src="../assets/logo.png" width="40" height="40">
		<b-menu>
			<b-menu-list>
				<b-menu-item icon-pack="fal" icon="clipboard-list" label="Home"></b-menu-item>
				<b-menu-item icon-pack="fal" icon="chart-pie-alt" label="Charts"></b-menu-item>
			</b-menu-list>
		</b-menu>
  </section>
</template>

<script>
export default {
  name: 'sidebar',
  props: {}
}
</script>

<style scoped>
  .sidebar {
		background-color: #F5F5F5;
    height: 100%;
  }
</style>
<style>
  .menu-list a {
    color: #818386;
  }
</style>
