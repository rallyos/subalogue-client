<template>
  <section class="sidebar">
    <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        aria-role="dialog"
        aria-modal>
        <template #default="props">
            <SubModal :sub="sub" action="create" @close="props.close"/>
        </template>
    </b-modal>
    <img alt="Subalogue logo" class="pt-4 pb-5" id="logo" src="@/assets/logo.png" width="40" height="40">
    <b-button id="add-button"
              class="mb-4"
              icon-size="is-medium"
              icon-pack="fal"
              icon-left="layer-plus"
              @click="isComponentModalActive = true"
              >
    Add Subscription
    </b-button>
    <FMenu/>
  </section>
</template>

<script>
import FMenu from './FMenu.vue'
import SubModal from './SubModal.vue'

export default {
  name: 'sidebar',
  data: () => ({
    isComponentModalActive: false,
    sub: {}
  }),
  props: {},
  components: {
    FMenu,
    SubModal
  }
}
</script>

<style scoped>
  #logo {
    display: block;
    margin: 0 auto;
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
