<template>
  <footer class="footer">
    <!-- Use level elements in the future -->
    <div class="py-2">
      <span class="is-pulled-right" id="version">Subalogue v{{ $root.version }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style scoped>
#version {
  font-size: 0.9em;
}
.footer {
  height: 40px;
  border-top: solid 1px #EDEDED;
  background-color: #FFF;
  padding: 0;
}
</style>
