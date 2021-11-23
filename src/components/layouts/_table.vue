<template>
  <md-table v-model="items" md-sort="name" class="border-0" md-sort-order="asc">
    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="Name" md-sort-by="name">{{
        item.name
      }}</md-table-cell>
      <md-table-cell md-label="Email" md-sort-by="email">{{
        item.email
      }}</md-table-cell>
      <md-table-cell md-label="Phone" md-sort-by="gender">{{
        item.Phone
      }}</md-table-cell>
      <md-table-cell md-label="Address" md-sort-by="title">{{
        item.Address
      }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: [false, "The items prop is required."],
      default: () => [
        {
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          Phone: "Male",
          Address: "Assistant Media Planner",
        },
        {
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          Phone: "Male",
          Address: "Assistant Media Planner",
        },
        {
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          Phone: "Male",
          Address: "Assistant Media Planner",
        },
        {
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          Phone: "Male",
          Address: "Assistant Media Planner",
        },
        {
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          Phone: "Male",
          Address: "Assistant Media Planner",
        },
      ],
    },
  },
};
</script>

<style langg="scss" scoped>
.md-table-head {
  border: none !important;
}

</style>
