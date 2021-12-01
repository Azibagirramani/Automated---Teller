<template>
<div class="card flex-fil" :class="baseExClass">
    <div class="card-header bg-transparent" :class="exHeader" v-if="header">
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
    actions:{
      type: Boolean,
      default: false,
      required: false
    },
    withHover: {
      type: Boolean,
      default: false,
      required: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
    exClass: {
      type: String,
      default: "",
      required: false,
    },
    baseExClass: {
      type: String,
      default: "",
      required: false,
    },
    exHeader: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/base/__colors.scss";
.card--hover {
  transition: all 500ms ease-in-out;
  cursor: pointer !important;
  &:hover {
    outline: 0.1rem solid $primary-color !important;
  }
}
</style>
