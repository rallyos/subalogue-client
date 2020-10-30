<template>
  <form action="">
      <div class="modal-card" style="width: 400px">
          <header class="modal-card-head">
              <p class="modal-card-title">Add subscription</p>
              <button
                  type="button"
                  class="delete"
                  @click="$emit('close')"/>
          </header>
          <section class="modal-card-body">
              <b-field label="Name">
                  <b-input
                      v-model="name"
                      placeholder="Name"
                      required>
                  </b-input>
              </b-field>

              <b-field label="Url">
                  <b-input
                      type="url"
                      v-model="url"
                      placeholder="Url">
                  </b-input>
              </b-field>

              <b-field label="Price">
                  <b-input
                      type="number"
                      v-model="price"
                      placeholder="Price">
                  </b-input>
              </b-field>
          </section>
          <footer class="modal-card-foot">
              <b-button @click="$emit('close')">Close</b-button>
              <b-button @click="createSubscription">Create</b-button>
          </footer>
      </div>
  </form>
</template>

<script>
		const axios = require('axios');
    import currency from 'currency.js'

    export default {
      data: () => ({
        name: "",
        price: 0,
        url: "",
      }),
      props: ['createdSub', 'canCancel'],
      methods: {
        createSubscription: function() {
          this.price = currency(this.price).intValue
					axios({
						method: "POST",
						url: "http://localhost:8000/api/v1/me/subscriptions",
						data: {name: this.name, url: this.url, price: this.price},
						withCredentials: true,
					}).then(response => ( this.$emit('add', response.data) ));
          this.$parent.close();
        }
      }
    }
</script>
