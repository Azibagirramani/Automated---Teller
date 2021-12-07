<template>
  <div>
    <BaseInput :placeholder="'Search....'" />
    <BaseTable />
    <div class="d-flex gap-4 justify-content-end py-2 mt-3 align-items-center">
      <div class="d-flex align-items-center gap-4">
        <span>Per Page</span>
        <BaseSelect :items="[5, 10]" v-model="perPage" />
      </div>
      <BasePagination
        :totalItems="computedSettlements.lenght"
        :currentPage="currentPage"
        :perPage="perPage"
        :basExClass="'mt-2'"
        @page-changed="pageChanged"
      />
    </div>
  </div>
</template>

<script>
import BaseSelect from "../../../components/forms/_select.vue";
import BaseInput from "../../../components/forms/_input.vue";
import BaseTable from "../../../components/layouts/_table.vue";
import BasePagination from "../../../components/layouts/_pagination.vue";
export default {
  name: "settlements",
  components: {
    BaseTable,
    BaseInput,
    BasePagination,
    BaseSelect,
  },
  data() {
    return {
      currentpage: 0,
      perPage: 0,
      settlements: [],
    };
  },
  computed: {
    computedSettlements() {
      return this.settlements;
    },
  },
  methods: {
    pageChanged(items) {
      console.log(items);
    },
  },
};
</script>
