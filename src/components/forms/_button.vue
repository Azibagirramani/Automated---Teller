<template>
  <div>
    <md-button :type="type" class="md" :class="exClass">{{ label }}</md-button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: "button",
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    exClass: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
