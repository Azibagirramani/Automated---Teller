<template>
  <div>
    <BaseCard
      :header="true"
      :exHeader="'d-flex justify-content-end border-0 m-0'"
    >
      <template v-slot:header>
        <div class="">
          <BaseSelect :label="'Select year'" :items="genenrateYear()" />
        </div>
      </template>
      <BaseChart :height="'300rem'" :series="series" :options="options"
    /></BaseCard>
    <BaseCard :baseExClass="'mt-3'" :header="true">
      <BaseInput :type="'text'" :placeholder="'Search....'" />
      <BaseTable
        :bordered="false"
        :borderless="true"
        :hover="true"
        :small="false"
        :outlined="false"
        :items="computedTransactions"
        :fields="fields"
        :perPage="perPage"
      />

      <div
        class="d-flex gap-4 justify-content-end py-2 mt-3 align-items-center"
      >
        <div class="d-flex align-items-center gap-4">
          <span>Per Page</span>
          <BaseSelect :items="[5, 10]" v-model="perPage" />
        </div>
        <BasePagination
          :totalItems="computedTransactions.lenght"
          :currentPage="currentpage"
          :perPage="perPage"
          :basExClass="'mt-2'"
          @page-changed="pageChanged"
        />
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseSelect from "../../../components/forms/_select.vue";
import BaseInput from "../../../components/forms/_input.vue";
import BaseTable from "../../../components/layouts/_table.vue";
import BasePagination from "../../../components/layouts/_pagination.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
export default {
  name: "settlements",
  components: {
    BaseTable,
    BaseInput,
    BasePagination,
    BaseSelect,
    BaseChart,
    BaseCard,
  },
  data() {
    return {
      currentpage: 0,
      perPage: 0,
      transactions: [],
      fields: [],

      // generate payment cash list
      series: [
        {
          data: [
            400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1200, 1380,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#0E1635"],
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
      },
    };
  },
  computed: {
    computedTransactions() {
      return this.transactions;
    },
  },
  methods: {
    pageChanged(items) {
      console.log(items);
    },

    genenrateYear() {
      let year = new Date().getFullYear();
      let years = [];
      for (let i = 0; i < 10; i++) {
        years.push(year - i);
      }
      return years;
    },
  },
  async mounted() {
    const response = await this.$Transaction.flutterwave();
    this.transactions = response.data;
  },
};
</script>
