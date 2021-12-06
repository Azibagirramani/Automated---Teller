<template>
  <div class="d-flex align-items-center gap-2">
    <md-field>
      <md-select v-model="Ivalue" md-dense>
        <md-option v-for="(item, index) in items" :key="index" :value="item">
          {{ item }}</md-option
        >
      </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
      default() {
        return [];
      },
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

<style lang="scss" scoped>
p {
  font-size: 0.8rem !important;
  font-weight: bold;
  display: inline;
}
</style>
