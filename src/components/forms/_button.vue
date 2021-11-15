<template>
  <div>
    <button :type="type" class="btn" :class="exClass">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    exClass: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
