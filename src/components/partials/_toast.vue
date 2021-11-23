<template>
  <md-snackbar
    varient="bg-primary"
    :md-position="position"
    :md-duration="isInfinity ? Infinity : duration"
    :md-active.sync="showSnackbar"
    md-persistent
  >
    <span>{{ label }}</span>
  </md-snackbar>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Checking for new data",
    },
    position: {
      type: String,
      default: "center",
    },
    duration: {
      type: Number,
      default: 3000,
      required: false,
    },
    isInfinity: {
      type: Boolean,
      default: false,
      required: false,
    },
    showSnackbar: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
};
</script>

<style></style>
