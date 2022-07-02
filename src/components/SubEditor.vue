<template>
  <form action="">
    <b-field grouped>
      <div class="column is-2">
        <b-input v-model="sub.name" placeholder="Name" icon-pack="fal" required>
        </b-input>
      </div>

      <div class="column is-2">
        <b-input
          type="url"
          v-model="sub.url"
          placeholder="Url"
          icon-pack="fal"
          required
        >
        </b-input>
      </div>

      <div class="column is-2">
        <b-input
          type="number"
          step="0.01"
          min="0"
          v-model="sub.price"
          icon-pack="fal"
          placeholder="Price"
          required
        >
        </b-input>
      </div>

      <div class="column is-3">
        <b-field grouped>
          <b-select
            placeholder="Recurring"
            v-model="sub.recurring"
            icon-pack="fal"
            style="width: 38%;"
            required
          >
            <option
              v-for="option in recurringOptions"
              :value="option"
              :key="option"
            >
              {{ option }}
            </option>
          </b-select>

          <b-datepicker
            placeholder="Date"
            icon="calendar-alt"
            icon-pack="fal"
            v-model="sub.billing_date"
            style="width: 38%;"
            required
          >
          </b-datepicker>
        </b-field>
      </div>

      <div class="column is-3">
        <b-button
          outlined
          type="is-success"
          icon-pack="fal"
          icon-left="layer-plus"
          :disabled="invalidForm"
          @click="triggerAction"
          class="mr-4"
        >
          {{ sub.id ? "Update" : "Add" }}
        </b-button>

        <b-button
          type="is-danger"
          outlined
          @click="$parent.inlineSubForm = false"
          >Close</b-button
        >
      </div>
    </b-field>
  </form>
</template>

<script>
import currency from "currency.js";

export default {
  name: "SubEditor",
  data: () => ({ recurringOptions: ["monthly", "yearly"] }),
  props: ["sub"],
  computed: {
    invalidForm: function() {
      return (
        !this.sub.name &&
        !this.sub.price &&
        !this.sub.url &&
        !this.sub.recurring &&
        !this.sub.billing_date
      );
    },
  },
  methods: {
    // Return YYYY-MM-DDT00:00:00Z format
    buildSafeDateString: function(date) {
      return (
        date.getFullYear() +
        "-" +
        ("0" + date.getMonth()).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2) +
        "T00:00:00Z"
      );
    },
    triggerAction: function() {
      this.$parent.inlineSubForm = false;
      this.sub.price = currency(this.sub.price).intValue;

      if (!this.sub.id) {
        this.$store.dispatch("createSubscription", {
          id: this.sub.id,
          name: this.sub.name,
          url: this.sub.url,
          price: this.sub.price,
          recurring: this.sub.recurring,
          billing_date: this.buildSafeDateString(this.sub.billing_date),
        });
      } else {
        this.$store.dispatch("updateSubscription", {
          id: this.sub.id,
          name: this.sub.name,
          url: this.sub.url,
          price: this.sub.price,
          recurring: this.sub.recurring,
          billing_date: this.buildSafeDateString(this.sub.billing_date),
        });
      }
    },
  },
};
</script>
