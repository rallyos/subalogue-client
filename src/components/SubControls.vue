<template>
	<div class="has-text-centered">
    <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        aria-role="dialog"
        aria-modal>
        <template #default="props">
            <SubModal :sub="sub" action="update" @close="props.close" />
        </template>
    </b-modal>
		<b-button class="mx-2" type="is-info is-light" icon-pack="fal" icon-right="edit" @click="isComponentModalActive = true"/>
		<b-button class="mx-2" type="is-danger is-light" icon-pack="fal" icon-right="trash-alt" @click="deleteSubscription"/>
	</div>
</template>

<script>
import SubModal from './SubModal.vue'

export default {
  name: 'SubControls',
  data: () => ({
    isComponentModalActive: false,
  }),
  props: ['sub'],
  components: {
    SubModal
  },
  methods: {
    showUpdateModal: function() {
    },
    deleteSubscription: function() {
      var confirmed = window.confirm("Delete subscription?");
      if (confirmed) {
        var url = 'http://localhost:8000/api/v1/me/subscriptions' + '/' + sub.id
        var confirmed = window.confirm("Delete subscription?");
        if (confirmed) {
          axios.delete(url, {withCredentials: true})
               .then(response => (this.$emit('delete', sub.id)))
        }
      }
    }
  }
}
</script>

