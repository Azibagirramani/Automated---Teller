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
      default: "",
    },
    position: {
      type: String,
      default: "center",
    },
    duration: {
      type: Number,
      default: 5000,
      required: false,
    },
    isInfinity: {
      type: Boolean,
      default: false,
      required: false,
    },
    showSnackbar: {
      type: Boolean,
      default: function () {
        return this.label !== "" ? true : false;
      },
      required: false,
    },
  },
  watch: {
    label: {
      handler(val) {
        console.log(val);
        this.showSnackbar = true;

        setTimeout(() => {
          this.showSnackbar = false;
        }, this.duration);
      },
    },
  },
};
</script>
