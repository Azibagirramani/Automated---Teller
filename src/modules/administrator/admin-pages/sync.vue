<template>
  <div class="m-0 m-0">
    <div class="">
      <md-tabs class="md-transparent" md-alignment="fixed">
        <md-tab to="" id="tab-home" md-label="Customer Sync"></md-tab>
        <md-tab
          id="tab-pages"
          to=""
          md-label="Sales Receipt"
          class="fw-bold"
        ></md-tab>
      </md-tabs>
    </div>
    <BaseToast :showSnackbar="false" />
  </div>
</template>

<script>
import BaseToast from "../../../components/partials/_toast.vue";
export default {
  components: {
    BaseToast,
  },
};
</script>
