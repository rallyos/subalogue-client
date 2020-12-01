<template>
  <section class="h-100">
    <section class="content-top">
        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="true"
            aria-role="dialog"
            aria-modal>
            <template #default="props">
                <SubModal :sub="sub" @close="props.close"/>
            </template>
        </b-modal>
    </section>
    <section class="hero grid-container pt-2 px-5 h-100 is-scrollable">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <b-icon
                  pack="far"
                  icon="stream"
                  size="is-medium"/>
              <span class="pr-2 is-size-5">Subscriptions</span>
            </div>
          </div>
          <div class="level-right">
            <!-- <b&#45;field> -->
            <!--   <b&#45;input class="gray&#45;input mt&#45;1 mb&#45;2" -->
            <!--     placeholder="Search" -->
            <!--     type="search" -->
            <!--     icon&#45;pack="fal" -->
            <!--     icon="search"> -->
            <!--   </b&#45;input> -->
            <!-- </b&#45;field> -->
          </div>
        </div>
      <div class="hero-head">
      </div>
      <div v-if="!subscriptions.length" class="empty-state-bg"></div>
      <div class="hero-body pt-0 px-0" v-if="subscriptions.length">
        <grid :cols="cols" :rows="rows" :styles="tableStyle"></grid>
      </div>
      <div class="hero-foot">
        <Footer/>
      </div>
    </section>
  </section>
</template>

<script>
import axios from 'axios';
import currency from 'currency.js'
import Footer from './Footer.vue'
import SubModal from './SubModal.vue'
import SubControls from './SubControls.vue'

export default {
  name: 'Content',
  computed: {
    subscriptions () {
      return this.$store.state.subscriptions
    },
    rows () {
      return this.$store.getters.subscriptionsToRows
    }
  },
  methods: {
    deleteHandler: function(subName) {
      return () => {
        var sub = this.$store.getters.findSubByName(subName)
        var confirmed = window.confirm("Delete subscription?");
        if (confirmed) {
          this.$store.dispatch('deleteSubscription', sub.id)
        }
      }
    },
    editHandler: function(subName) {
      return () => {
        var sub = this.$store.getters.findSubByName(subName)

        this.sub = Object.assign({}, sub)
        this.isComponentModalActive = true;
      }
    },
    getSubscriptions: function() {
      this.$store.dispatch('getSubscriptions')
    },
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
              SubControls, { }, {
                "on": {
                  "edit": this.editHandler(row.cells[0].data),
                  "delete": this.deleteHandler(row.cells[0].data)
                }
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
      sub: {}
    }
  }
}
</script>

<style scoped>
.content {
}
.subscription-heading {
}
.content-top {
  background-color: #F5F5F5;
}
.empty-state-bg {
	width: 100%;
	height: 100%;
  background-image: url('~@/assets/undraw_starry_window_ppm0.svg');
	background-repeat: no-repeat;
	background-position-x: center;
	background-position-y: center;
	background-size: 50%;
}
.grid-container {
  font-size: 0.95rem;
  background-color: #FFF;
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
.gridjs-td[data-column-id=""], .gridjs-td[data-column-id=""] {
  padding-top: 0.2em;
}
.favico {
  float: left;
  margin-top: 0.16em;
  margin-right: 0.7em;
}
</style>
