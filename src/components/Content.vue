<template>
  <section class="pl-6 pr-4 mb-2 h-100">
    <section class="content-top">
        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="true"
            aria-role="dialog"
            aria-modal>
            <template #default="props">
								<CreateSub v-bind="createdSub" @close="props.close" @add="addToTable"/>
            </template>
        </b-modal>
			<b-field>
				<b-input class="gray-input mt-2 mb-4"
					placeholder="Search"
					type="search"
					icon-pack="fal"
					icon="search">
				</b-input>
			</b-field>
    </section>
    <section class="hero grid-container pt-5 px-5 h-100 is-scrollable">
      <div class="hero-head">
        <h2 class="subscription-heading">Subscriptions</h2>
        <b-button @click="isComponentModalActive = true"
							class="mt-1 ml-3"
							size="is-small"
							icon-pack="fal"
							icon-right="plus"/>
      </div>
			<div class="hero-body">
        <grid :cols="cols" :rows="rows"></grid>
      </div>
      <div class="hero-foot">
        <Footer/>
      </div>
		</section>
  </section>
</template>

<script>
const axios = require('axios')
import Footer from './Footer.vue'
import CreateSub from './CreateSub.vue'
import currency from 'currency.js'
import { _, html } from 'gridjs'
import Grid from 'gridjs-vue'

export default {
  name: 'Content',
  methods: {
    addToTable: function(newSub) {
      newSub.price = currency(newSub.price, { fromCents: true }).value;
      this.rows.push(newSub)
    },
    getSubscriptions: function() {
			axios
        .get('http://localhost:8000/api/v1/me/subscriptions', {withCredentials: true})
        .then(response => (
          response.data.subscriptions.forEach(function(sub) {
            sub.price = currency(sub.price, { fromCents: true }).value;
          }),
          this.subscriptions = response.data.subscriptions,
          this.rows = this.subscriptionsToRows(this.subscriptions)
        ))
    },
    subscriptionsToRows: function(subscriptions) {
      var rows = [];
      subscriptions.forEach(function(sub) {
        rows.push({name: sub.name, url: sub.url, price: sub.price})
      });
      return rows
   }
  },
	components: {
		Grid,
		Footer,
    CreateSub
	},
	data() {
    this.getSubscriptions()
		return {
      isComponentModalActive: false,
      cols: [
        { name: "Name", formatter: (cell, row) => html(`<img width="16" height="16" class="favico" src="${row.cells[1].data}/favicon.ico"> <span>${cell}</span>`) },
        { name: "Url", formatter: (cell) => html(`<a href="${cell}" target="_blank" rel="noopener noreferrer">${cell}</a>`) },
        { name: "price",
          attributes: {
            "data-field": "price"
          }
        }
      ],
      subscriptions: [],
      rows: [],
      createdSub: {}
		}
	}
}
</script>

<style scoped>
.content {
}
.subscription-heading {
  float: left;
}
.content-top {
  background-color: #F5F5F5;
}
.grid-container {
  font-size: 0.95rem;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.is-scrollable {
  overflow: scroll;
}
</style>
<style>
.gray-input > input{
    background-color: #EDEDED;
    border-color: #EDEDED;
}
.gridjs-td[data-column-id="name"], .gridjs-td[data-column-id="price"] {
  font-weight: 600;
}
.favico {
  float: left;
  margin-top: 0.16em;
  margin-right: 0.7em;
}
</style>
