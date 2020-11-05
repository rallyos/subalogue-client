<template>
  <section class="menu-container ml-4 pb-3">
    <a href="#" class="menu-item" :class="{ active: $root.currentRoute == '/app' }">
      <section class="my-4 has-text-centered">
        <b-icon class="menu-item-icon my-1" pack="fal" icon="table"></b-icon>
        <span class="menu-item-label" >Overview</span>
      </section>
    </a>
    <a href="#" class="menu-item">
      <section class="my-4 has-text-centered">
        <b-icon class="menu-item-icon my-1" pack="fal" icon="chart-pie-alt"></b-icon>
        <span class="menu-item-label">Charts</span>
      </section>
    </a>
  </section>
</template>

<script>
    export default {
      name: "FMenu",
      data: () => ({ }),
      props: [],
      methods: {
      }
    }
</script>

<style scoped>
.menu-container {
  border-bottom: solid 2px #dcdcdc;
}
.menu-item {
  color: #818386;
}
.menu-item-label {
}
.menu-item {
  font-size: 1em;
  font-weight: 500;
}
.menu-item-icon {
  display: block;
  margin: 0 auto;
  width: 1.3em;
  height: 1.3em;
  font-size: 1.3em;
}
.menu-item:hover {
  color: #FF575A;
}
.active {
  color: #FF575A;
}
</style>
