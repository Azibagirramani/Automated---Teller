<template>
  <md-empty-state
    :md-icon="icons"
    :md-label="label"
    :md-description="description"
  >
    <slot></slot>
  </md-empty-state>
</template>

<script>
export default {
  props: {
    icons: {
      type: String,
      default: "devices_other",
    },
    label: {
      type: String,
      default: "Waiting for Synchronization to start",
    },
    description: {
      type: String,
      default:
        "Please pick an option to view stats and manage synchronizations",
    },
  },
};
</script>

<style></style>
