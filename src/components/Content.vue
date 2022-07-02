<template>
  <section class="h-100">
    <section class="content-top"></section>
    <section class="hero grid-container pt-2 px-5 h-100 is-scrollable">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <span class="pr-2 is-size-5">Subscriptions</span>

            <b-button
              rounded
              :hovered="inlineSubForm"
              icon-pack="fal"
              icon-left="layer-plus"
              @click="
                inlineSubForm = !inlineSubForm;
                sub = {};
              "
            >
              Add
            </b-button>
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
      <div class="hero-head" style="height: 50px">
        <SubEditor v-if="inlineSubForm" :sub="sub" />
      </div>
      <div v-if="!subscriptions.length" class="empty-state-bg"></div>
      <div class="hero-body pt-0 px-0" v-if="subscriptions.length">
        <grid :cols="cols" :rows="rows" :styles="tableStyle"></grid>
      </div>
      <div class="hero-foot">
        <Footer />
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import currency from "currency.js";
import Footer from "./Footer.vue";
import SubEditor from "./SubEditor.vue";
import SubControls from "./SubControls.vue";

export default {
  name: "Content",
  computed: {
    subscriptions() {
      return this.$store.state.subscriptions;
    },
    rows() {
      return this.$store.getters.subscriptionsToRows;
    },
  },
  methods: {
    deleteHandler: function(subName) {
      return () => {
        var sub = this.$store.getters.findSubByName(subName);
        var confirmed = window.confirm("Delete subscription?");
        if (confirmed) {
          this.$store.dispatch("deleteSubscription", sub.id);
        }
      };
    },
    editHandler: function(subName) {
      return () => {
        var sub = this.$store.getters.findSubByName(subName);

        this.sub = Object.assign({}, sub);
        this.inlineSubForm = true;
      };
    },
    getSubscriptions: function() {
      this.$store.dispatch("getSubscriptions");
    },
  },
  components: {
    Footer,
    SubEditor,
  },
  data() {
    this.getSubscriptions();
    return {
      inlineSubForm: false,
      cols: [
        {
          name: "Name",
          formatter: (cell, row) =>
            this.$gridjs.html(
              `<img width="16" height="16" class="favico" src="${row.cells[1].data}/favicon.ico"> <span>${cell}</span>`
            ),
        },
        {
          name: "Url",
          formatter: (cell) =>
            this.$gridjs.html(
              `<a href="${cell}" target="_blank" rel="noopener noreferrer">${cell}</a>`
            ),
        },
        {
          name: "Price",
          attributes: {
            "data-field": "price",
          },
        },
        { name: "Recurring" },
        {
          id: "billing_date",
          name: "Billing date",
          formatter: (cell) => new Date(cell).toLocaleDateString(),
        },
        {
          name: "",
          formatter: (cell, row) => {
            const current = this.$gridjs.uuid();
            this.$gridjs.render(
              `[data-ref="${current}"]`,
              SubControls,
              {},
              {
                on: {
                  edit: this.editHandler(row.cells[0].data),
                  delete: this.deleteHandler(row.cells[0].data),
                },
              }
            );
            return this.$gridjs.html(`<div data-ref="${current}"></div>`);
          },
        },
      ],
      tableStyle: {
        td: {
          border: "none",
        },
        th: {
          background: "none",
          border: "none",
          "border-bottom": "solid 1px #dcdcdc",
        },
      },
      sub: {},
    };
  },
};
</script>

<style scoped>
.content {
}
.subscription-heading {
}
.content-top {
  background-color: #f5f5f5;
}
.empty-state-bg {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/undraw_starry_window_ppm0.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 50%;
}
.grid-container {
  font-size: 0.95rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.is-scrollable {
  overflow: scroll;
}
</style>
<style>
.gray-input > input {
  background-color: #ededed;
  border-color: #ededed;
}
.gridjs-wrapper {
  box-shadow: none !important;
}
.gridjs-td[data-column-id="name"],
.gridjs-td[data-column-id="price"] {
  font-weight: 600;
}
.gridjs-td[data-column-id=""],
.gridjs-td[data-column-id=""] {
  padding-top: 0.2em;
}
.favico {
  float: left;
  margin-top: 0.16em;
  margin-right: 0.7em;
}
</style>
