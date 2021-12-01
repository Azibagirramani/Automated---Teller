<template>
  <b-table
    :bordered="bordered"
    :borderless="borderless"
    :outlined="outlined"
    :small="small"
    :hover="hover"
    :fields="fields"
    :items="items"
    responsive="sm"
    :busy="loading"
  >
  </b-table>
</template>

<script>
export default {
  data(){
    return {
      fields: [
        { label: "First Name", field: "first_name", sortable: true },
        { label: "Last Name", field: "last_name", sortable: true },
        { label: "Status", field: "status", sortable: true },
        { label: "Address", field: "address", sortable: true },
        { label: "Status", field: "status", sortable: true },
      ],
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: [false, "The items prop is not required."],
      default: () => [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald", status: "active"},
        { age: 21, first_name: "Larsen", last_name: "Shaw", status: "active" },
        { age: 89, first_name: "Geneva", last_name: "Wilson", status: "active" },
        { age: 38, first_name: "Jami", last_name: "Carney", status: "active" },
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