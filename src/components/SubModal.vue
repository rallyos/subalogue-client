<template>
  <form action="">
      <div class="modal-card has-text-left" style="width: 400px">
          <header class="modal-card-head">
              <p class="modal-card-title">{{action == 'create' ? 'Create' : 'Update'}} subscription</p>
              <button
                  type="button"
                  class="delete"
                  @click="$emit('close')"/>
          </header>
          <section class="modal-card-body">
              <b-field label="Name">
                  <b-input
                      v-model="sub.name"
                      placeholder="Name"
                      required>
                  </b-input>
              </b-field>

              <b-field label="Url">
                  <b-input
                      type="url"
                      v-model="sub.url"
                      placeholder="Url">
                  </b-input>
              </b-field>

              <b-field label="Price">
                  <b-input
                      type="number"
                      step="0.01"
                      min="0"
                      v-model="sub.price"
                      placeholder="Price">
                  </b-input>
              </b-field>

              <b-field label="Recurring">
                  <b-select placeholder="Recurring" v-model="sub.recurring">
                      <option
                          v-for="option in recurringOptions"
                          :value="option"
                          :key="option">
                          {{ option }}
                      </option>
                  </b-select>
              </b-field>

              <b-field label="Billing Date">
                  <b-datepicker
                      placeholder="Billing Date"
                      :locale="undefined"
                      icon="calendar-alt"
                      v-model="sub.billing_date"
                      icon-pack="fal">
                  </b-datepicker>
              </b-field>
          </section>
          <footer class="modal-card-foot">
              <b-button type="is-danger" outlined @click="$emit('close')">Close</b-button>
              <b-button type="is-success" outlined @click="triggerAction">{{action == 'create' ? 'Create' : 'Update'}}</b-button>
          </footer>
      </div>
  </form>
</template>

<script>
import currency from 'currency.js'

export default {
  name: "SubModal",
  data: () => ({recurringOptions: ['monthly', 'yearly']}),
  props: ['sub'],
  computed: {
    action ()  {
      return this.sub.id ? 'update' : 'create'
    }
  },
  methods: {
    // Return YYYY-MM-DDT00:00:00Z format
    buildSafeDateString: function(date) {
      return date.getFullYear() + '-' + ("0" + date.getMonth()).slice(-2) + '-' + ("0" + date.getDate()).slice(-2) + 'T00:00:00Z'
    },
    triggerAction: function() {
      this.$parent.close();
      this.sub.price = currency(this.sub.price).intValue

      if (this.action == "create") {
        this.$store.dispatch('createSubscription', {
          id: this.sub.id,
          name: this.sub.name,
          url: this.sub.url,
          price: this.sub.price,
          recurring: this.sub.recurring,
          billing_date: this.buildSafeDateString(this.sub.billing_date)
        })
      } else {
        this.$store.dispatch('updateSubscription', {
          id: this.sub.id,
          name: this.sub.name,
          url: this.sub.url,
          price: this.sub.price,
          recurring: this.sub.recurring,
          billing_date: this.buildSafeDateString(this.sub.billing_date)
        })
      }
    }
  }
}
</script>
