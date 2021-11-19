<template>
  <b-table
    :bordered="bordered"
    :borderless="borderless"
    :outlined="outlined"
    :small="small"
    :hover="hover"
    :fields="columns"
    :items="items"
    responsive="sm"
    :busy="loading"
  >
  </b-table>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      required: [true, "The items prop is required."],
      default: () => [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
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
    bordered: {
      type: Boolean,
      required: [false, "The bordered prop is not required."],
      default: false,
    },
    borderless: {
      type: Boolean,
      required: [false, "The borderless prop is not required."],
      default: false,
    },
    outlined: {
      type: Boolean,
      required: [false, "The outlined prop is not required."],
      default: false,
    },
    small: {
      type: Boolean,
      required: [false, "The small prop is not required."],
      default: false,
    },
    hover: {
      type: Boolean,
      required: [false, "The hover prop is not required."],
      default: false,
    },
  },
};
</script>

<style></style>
