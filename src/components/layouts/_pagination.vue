<template>
  <div>
    <b-pagination
      :total-rows="totalItems"
      :per-page="perPage"
      :current-page="currentPage"
      @change="onChangePage"
      :class="basExClass"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    basExClass: {
      type: String,
      default: "",
    },
  },

  methods: {
    onChangePage(page) {
      this.$emit("page-changed", page);
    },
  },
};
</script>

<style></style>
