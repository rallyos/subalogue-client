<template>
  <section class="menu-container pb-3">
    <a href="#" class="menu-item" :class="{ active: $root.currentRoute == '/app' }">
      <section>
        <b-icon class="menu-item-icon mx-2 my-1" pack="fal" icon="list-alt" size="is-medium"></b-icon>
        <span class="menu-item-label" >Overview</span>
      </section>
    </a>
    <a href="#" class="menu-item">
      <section>
        <b-icon class="menu-item-icon mx-2 my-1" pack="fal" icon="chart-pie-alt" size="is-medium"></b-icon>
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
  color: #898B8D;
}
.menu-item-label {
}
.menu-item {
  font-size: 1em;
  font-weight: 500;
}
.menu-item-icon {
  /* width: 1.3em; */
  /* height: 1.3em; */
  /* font-size: 1.3em; */
}
.menu-item:hover {
  color: #FF575A;
}
.active {
  color: #FF575A;
}
</style>
