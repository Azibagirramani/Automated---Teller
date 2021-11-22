<template>
  <md-table v-model="items">
    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
        item.id
      }}</md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="name">{{
        item.name
      }}</md-table-cell>
      <md-table-cell md-label="Email" md-sort-by="email">{{
        item.email
      }}</md-table-cell>
      <md-table-cell md-label="Gender" md-sort-by="gender">{{
        item.gender
      }}</md-table-cell>
      <md-table-cell md-label="Job Title" md-sort-by="title">{{
        item.title
      }}</md-table-cell>
    </md-table-row>

  </md-table>
</template>

<script>
export default {
  data() {
    return {
      paginatedItems: []
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      required: [false, "The items prop is required."],
      default: () => [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner",
        },
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner",
        },
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner",
        },
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner",
        },
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner",
        },
      ],
    },
    columns: {
      type: Array,
      required: [true, "The columns prop is required."],
      default: () => [
        {
          label: "First Name",
          field: "first_name",
          sortable: true,
        },
        {
          label: "Last Name",
          field: "last_name",
          sortable: true,
        },
        {
          label: "Age",
          field: "age",
          sortable: true,
        },
      ],
    },
  },
  methods: {
    updatePagination(page, pageSize, sort, sortOrder) {
      console.log("pagination has updated", page, pageSize, sort, sortOrder);
    },
  },
};
</script>

<style></style>
