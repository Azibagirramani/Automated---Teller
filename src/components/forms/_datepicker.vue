<template>
  <md-datepicker
    class="small"
    v-model="selectedDate"
    :md-immediately="immediately"
  >
    <label>{{ label }}</label>
  </md-datepicker>
</template>

<script>
export default {
  props: {
    immediately: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Datepicker",
    },
  },
  computed: {
    selectedDate: {
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
