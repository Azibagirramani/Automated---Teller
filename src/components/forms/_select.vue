<template>
  <div class="">
    <select class="form-control form-control-sm" id="accounts">
      <option v-for="(item, index) in items" :key="index" :value="items">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
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

<style></style>
