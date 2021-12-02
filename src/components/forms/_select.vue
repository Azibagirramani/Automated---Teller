<template>
  <div class="d-flex align-items-center gap-2">
    <md-field>
      <md-select v-model="country" name="country" id="country" md-dense>
        <md-option v-for="(item, index) in items" :key="index" :value="items">
          {{ item }}</md-option
        >
      </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
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
        return ["items"];
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
