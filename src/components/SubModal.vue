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
          </section>
          <footer class="modal-card-foot">
              <b-button type="is-danger" outlined @click="$emit('close')">Close</b-button>
              <b-button type="is-success" outlined @click="sendRequest">{{action == 'create' ? 'Create' : 'Update'}}</b-button>
          </footer>
      </div>
  </form>
</template>

<script>
		const axios = require('axios');
    import currency from 'currency.js'

    export default {
      name: "SubModal",
      data: () => ({ }),
      props: ['sub', 'action', 'canCancel'],
      methods: {
        sendRequest: function() {
          this.price = currency(this.price).intValue

          if (this.action == "create") {
            var method = "POST";
            var idPart = "";
          } else {
            var method = "UPDATE";
            var idPart = "/" + this.sub.id;
          }

					axios({
						method: method,
						url: "http://localhost:8000/api/v1/me/subscriptions" + idPart,
						data: {name: this.sub.name, url: this.sub.url, price: this.sub.price},
						withCredentials: true,
            }).then(response => ( this.$emit(this.action, response.data) ));
          this.$parent.close();
        }
      }
    }
</script>
