<template>
  <div>
    <b-table
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :fields="fields"
      :items="items"
      responsive="sm"
      :current-page="currentPage"
      :per-page="perPage"
      :busy="loading"
      :foot-clone="footClone"
    >
      <template #cell(actions)="data">
        <div class="d-flex justify-content-center align-items-center">
          <md-button
            class="md-icon-button md-primary"
            v-if="data.item.status == 'Active'"
          >
            <md-icon>sync</md-icon>
          </md-button>
          <md-button
            class="md-icon-button md-primary"
            @click="onRowSelected(data.item)"
          >
            <md-icon>view_day</md-icon>
          </md-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    footClone: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: [false, "The items prop is not required."],
      default: () => [
        {
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          status: "active",
        },
        { age: 21, first_name: "Larsen", last_name: "Shaw", status: "active" },
        {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          status: "active",
        },
        { age: 38, first_name: "Jami", last_name: "Carney", status: "active" },
      ],
    },
    fields: {
      type: Array,
      required: [false, "The fields prop is not required."],
      default: () => [],
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
    currentPage: {
      type: Number,
      required: [false, "The currentPage prop is not required."],
      default: 1,
    },
    perPage: {
      type: Number,
      required: [false, "The perPage prop is not required."],
      default: 10,
    },
  },

  methods: {
    onRowSelected(item) {
      this.$emit("row-selected", item);
    },
  },
};
</script>

<style></style>
