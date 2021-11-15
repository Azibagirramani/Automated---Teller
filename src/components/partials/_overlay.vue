<template>
  <b-overlay :show="show" rounded="sm" variant="primary">
    <slot></slot>
  </b-overlay>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
