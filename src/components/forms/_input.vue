<template>
  <div>
    <label :for="name" v-if="label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :id="name"
      v-model="ivalue"
      :aria-describedby="name"
      :placeholder="placeholder || name"
    />
    <small :id="name" class="form-text"></small>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: String,
      required: false,
      default: "",
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  computed: {
    ivalue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss"></style>
