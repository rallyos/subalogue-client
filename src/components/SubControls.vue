<template>
  <div class="has-text-centered">
    <b-button type="is-info is-light" class="light-hover-only" icon-pack="fal" icon-right="edit" @click="$emit('edit')"/>
    <b-button type="is-danger is-light" class="light-hover-only" icon-pack="fal" icon-right="trash-alt" @click="$emit('delete')"/>
  </div>
</template>

<script>
export default {
  name: 'SubControls',
  data: () => ({ }),
  components: { }
}
</script>

<style scoped>
.light-hover-only {
  background-color: transparent !important;
  box-shadow: none !important;
}
.light-hover-only.is-danger:hover {
  background-color: #fde0e6 !important;
}
.light-hover-only.is-info:hover {
  background-color: #e0eefd !important;
}
</style>
