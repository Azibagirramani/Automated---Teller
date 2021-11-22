<template>
  <!-- <div class="card" :class="baseExClass">
    <div class="card-header bg-transparent" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" :class="exClass">
      <slot></slot>
    </div>
  </div> -->
  <md-card :md-with-hover="withHover" class="" :class="baseExClass">
    <md-card-header v-if="header">
      <div class="md-title">Card with hover effect</div>
      <div class="md-subhead">It also have a ripple</div>
    </md-card-header>

    <md-card-content>
      <slot></slot>
    </md-card-content>

    <md-card-actions v-if="actions">
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
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
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/base/__colors.scss";
.card--hover {
  cursor: pointer !important;
  &:hover {
    outline: 0.1rem solid $primary-color !important;
  }
}
</style>
