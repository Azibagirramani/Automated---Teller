<template>
  <b-overlay :show="show" rounded="lg" variant="">
    <slot></slot>
    <template #overlay>
      <div class="text-center">
        <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
        <p id="cancel-label">Please wait...</p>
      </div>
    </template>
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
