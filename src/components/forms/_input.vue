<template>
  <div id="input">
    <ValidationProvider :rules="rules" v-slot="{ errors }">
      <md-field>
        <label :for="name" v-if="label" class="fw-bold">{{
          computedLabel
        }}</label>
        <md-input
          :type="type"
          :id="name"
          v-model="ivalue"
          :aria-describedby="name"
          :placeholder="placeholder || name"
          :required="required"
        ></md-input>
        <md-icon v-if="icon">{{ icon }}</md-icon>
      </md-field>
      <span class="text-danger">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    required: {
      type: Boolean,
      default: true,
    },
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
    icon: {
      type: String,
      required: false,
    },
    rules: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  computed: {
    computedLabel() {
      return this.label || this.name;
    },
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

<style lang="scss" scoped>
@import "../../sass/base/__colors.scss";

label {
  color: $primary-color !important;
}
.md-input:focus {
  border-color: red !important;
}
</style>
