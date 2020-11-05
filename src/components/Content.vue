<template>
  <section class="pl-4 pr-4 mb-2 h-100">
    <section class="content-top">
        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="true"
            aria-role="dialog"
            aria-modal>
            <template #default="props">
                <SubModal :sub="sub" action="create" @close="props.close" @create="addToTable" update="updateInTable"/>
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
      <div class="hero-body pt-3">
        <grid :cols="cols" :rows="rows" :styles="tableStyle"></grid>
      </div>
      <div class="hero-foot">
        <Footer/>
      </div>
    </section>
  </section>
</template>

<script>
const axios = require('axios')
import currency from 'currency.js'

import Footer from './Footer.vue'
import SubModal from './SubModal.vue'
import SubControls from './SubControls.vue'
// import { _, html } from 'gridjs'
// import { Grid from 'gridjs-vue'

export default {
  name: '',
  mounted() {
    this.$on('delete', function() {'chep'});
  },
  methods: {
    addToTable: function(sub) {
      sub.price = currency(sub.price, { fromCents: true }).value;
      this.rows.push(sub)
    },
    updateInTable: function(sub) {
      var index = this.findSubIndexById(sub.id)
      this.subscriptions[index] = sub
      this.subscriptionsToRows()
    },
    deleteFromTable: function(id) {
      debugger
      var index = this.findSubIndexById(id)
      this.subscriptions.splice(index, 1)
      this.subscriptionsToRows()
    },
    getSubscriptions: function() {
      axios
        .get('http://localhost:8000/api/v1/me/subscriptions', {withCredentials: true})
        .then(response => (
          response.data.subscriptions.forEach(function(sub) {
            sub.price = currency(sub.price, { fromCents: true }).value;
          }),
          this.subscriptions = response.data.subscriptions,
          this.subscriptionsToRows()
        ))
    },
    subscriptionsToRows: function() {
      var rows = [];
      this.subscriptions.forEach(function(sub) {
        rows.push({name: sub.name, url: sub.url, price: sub.price})
      });
      this.rows = rows
    },
    findSubIndexById: function(id) {
      return this.subscriptions.findIndex(sub => (sub.id == id))
    },
    findSubByName: function(name) {
      return this.subscriptions.find(sub => (sub.name == name))
    }
  },
  components: {
    Footer,
    SubModal
  },
  data() {
    this.getSubscriptions()
    return {
      isComponentModalActive: false,
      cols: [
        { name: "Name", formatter: (cell, row) => this.$gridjs.html(`<img width="16" height="16" class="favico" src="${row.cells[1].data}/favicon.ico"> <span>${cell}</span>`) },
        { name: "Url", formatter: (cell) => this.$gridjs.html(`<a href="${cell}" target="_blank" rel="noopener noreferrer">${cell}</a>`) },
        { name: "Price",
          attributes: {
            "data-field": "price"
          }
        },
        { name: "",
          formatter: (cell, row) => {
            const current = this.$gridjs.uuid()
            this.$gridjs.render(
              `[data-ref="${current}"]`,
              SubControls, {
                "sub": this.findSubByName(row.cells[0].data)
              }, {
                "on": {
                  "delete": this.deleteFromTable}
              }
            )
            return this.$gridjs.html(`<div data-ref="${current}"></div>`)
          }
        }
      ],
      tableStyle: {
        td: {
          'border': 'none'
        },
        th: {
          'background': 'none',
          'border': 'none',
          'border-bottom': 'solid 1px #dcdcdc'

        }
      },
      subscriptions: [],
      rows: [],
      sub: {}
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
.gridjs-wrapper {
  box-shadow: none !important;
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
