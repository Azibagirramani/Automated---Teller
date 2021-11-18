<template>
  <div class="card" :class="baseExClass">
    <div class="card-header bg-transparent" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" :class="exClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false,
    },
    exClass: {
      type: String,
      default: "",
    },
    baseExClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
