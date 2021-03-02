<template>
  <div class="has-text-centered is-flex">
    <b-button type="is-info is-light" class="light-hover-only no-horizontal-padding" icon-pack="fal" icon-right="edit" @click="$emit('edit')"/>
    <b-button type="is-danger is-light" class="light-hover-only no-horizontal-padding" icon-pack="fal" icon-right="trash-alt" @click="$emit('delete')"/>
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
.no-horizontal-padding {
  margin-right: 0.15em;
  margin-left: 0.15em;
  padding-right: 0.75em;
  padding-left: 0.75em;
}
.light-hover-only {
  background-color: transparent !important;
  box-shadow: none !important;
}
.light-hover-only.is-danger:hover {
  color: #8c001c !important;
}
.light-hover-only.is-info:hover {
  color: #003775 !important;
}
</style>
