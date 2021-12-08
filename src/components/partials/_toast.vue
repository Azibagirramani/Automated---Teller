<template>
  <md-snackbar
    varient="bg-primary"
    :md-position="position"
    :md-duration="isInfinity ? Infinity : duration"
    :md-active="showSnackbar || this.$store.state.sync.isSyncing"
    md-persistent
  >
    <div class="d-flex justify-content-end gap-4 align-content-center">
      {{ label || this.$store.state.sync.label }}
      <md-progress-spinner
        class="md-accent"
        md-mode="indeterminate"
        :md-diameter="30"
      ></md-progress-spinner>
    </div>
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
      default: "left",
    },
    duration: {
      type: String,
      default: "Infinity",
      required: false,
    },
    isInfinity: {
      type: Boolean,
      default: false,
      required: false,
    },
    showSnackbar: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  watch: {
    label: {
      handler() {
        this.showSnackbar = true;
        setTimeout(() => {
          this.showSnackbar = false;
        }, this.duration);
      },
    },
  },
};
</script>
