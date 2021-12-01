<template>
  <b-modal
    id="modal-center"
    hide-footer
    hide-header
    hide-header-close
    centered
    ref="modal"
  >
    <slot></slot>
  </b-modal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    showModal() {
      this.$refs.modal.show();
    },
    hideModal() {
      this.$refs.modal.hide();
    },
  },

  watch: {
    show: function (value) {
      if (value) {
        this.showModal();
      } else {
        this.hideModal();
      }
    },
  },
  mounted() {
    this.hideModal();
  },
};
</script>

<style></style>
