<template>
  <md-checkbox v-model="Ivalue" :value="label.toLowerCase()">{{
    label
  }}</md-checkbox>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    Ivalue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
