<template>
  <md-dialog-confirm
    :md-active.sync="active"
    :md-title="title"
    :md-content="content"
    :md-confirm-text="AgreeText"
    :md-cancel-text="DisagreeText"
    @md-cancel="onCancel"
    @md-confirm="onConfirm"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Confirm",
    },
    content: {
      type: String,
      default: "Are you sure?",
    },
    active: {
      type: Boolean,
      default: true,
    },
    AgreeText: {
      type: String,
      default: "Agreed",
    },
    DisagreeText: {
      type: String,
      default: "Disagree",
    },
  },
  methods: {
    onCancel() {
      //   this.active = false;
      //   this.$emit("cancel", "canclled");
      console.log("cancel");
    },
    onConfirm() {
      //   this.active = false;
      //   this.$emit("confirm", "Agreed");
      console.log("cancel");
    },
  },
};
</script>

<style></style>
