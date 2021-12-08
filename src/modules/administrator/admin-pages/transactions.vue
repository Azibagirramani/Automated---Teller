<template>
  <div>
    <div class="d-flex justify-content-end mb-2">
      <md-button
        class="md-raised bg-primary text-white"
        @click="startSynchronization"
        >Sync data</md-button
      >
    </div>
    <BaseCard :header="true">
      <template v-slot:header>
        <h5>Transactions</h5>
      </template>

      <BaseOverlay :show="loader">
        <div class="row">
          <div class="col-md-9">
            <BaseChart :height="'300rem'" :series="series" :options="options" />
          </div>
          <div class="col-md-3">
            <BaseChart
              :height="'250rem'"
              :series="polarisChart.series"
              :options="polarisChart.options"
            />
          </div>
        </div>
      </BaseOverlay>
    </BaseCard>
    <BaseCard :baseExClass="'mt-3'" :header="true">
      <template :header="true">
        <div class="d-flex justify-content-end border-0 m-0">
          <BaseSelect
            :label="'Select year'"
            :items="genenrateYear()"
            v-model="selectedYear"
          />
        </div>
      </template>
      <BaseInput :type="'text'" :placeholder="'Search....'" v-model="search" />
      <BaseTable
        :bordered="false"
        :borderless="true"
        :hover="true"
        :small="false"
        :outlined="false"
        :items="computedTransactions"
        :fields="fields"
        :perPage="perPage"
        :loading="loader"
        :currentPage="currentpage"
      />

      <div
        class="d-flex gap-4 justify-content-end py-2 mt-3 align-items-center"
      >
        <div class="d-flex align-items-center gap-4">
          <span>Per Page</span>
          <BaseSelect :items="[5, 10]" v-model="perPage" />
        </div>
        <BasePagination
          :totalItems="computedTransactions.length"
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
import moment from "moment";
import BaseSelect from "../../../components/forms/_select.vue";
import BaseInput from "../../../components/forms/_input.vue";
import BaseTable from "../../../components/layouts/_table.vue";
import BasePagination from "../../../components/layouts/_pagination.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseOverlay from "../../../components/partials/_overlay.vue";
export default {
  name: "settlements",
  components: {
    BaseTable,
    BaseInput,
    BasePagination,
    BaseSelect,
    BaseChart,
    BaseCard,
    BaseOverlay,
  },
  data() {
    return {
      selectedYear: 2021,
      currentpage: 1,
      perPage: 10,
      search: "",
      transactions: [],
      loader: false,
      fields: [
        {
          key: "transferred_at",
          label: "Date",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("DD-MM-YYYY");
          },
        },
        {
          key: "amount",
          label: "Amount",
          sortable: true,
        },
        {
          key: "transferred_at",
          label: "Date",
          sortable: false,
        },
        {
          key: "reason",
          label: "Description",
          sortable: true,
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
      ],

      // generate polaris chart options

      polarisChart: {
        series: [12, 17, 21],
        options: {
          chart: {
            type: "polarArea",
            height: 350,
            sparkline: {
              enabled: true,
            },
          },
        },
      },

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
          type: "line",
          barWidth: "20%",
          toolbar: {
            show: false,
          },
        },
        markers: {
          size: 5,
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#0E1635"],
        xaxis: {
          type: "category",
          categories: [
            "December",
            "November",
            "October",
            "September",
            "August",
          ],
        },
      },
    };
  },
  computed: {
    // search transaction
    computedTransactions() {
      return this.transactions.filter((transaction) => {
        return (
          transaction.reason
            .toLowerCase()
            .includes(this.search.toLowerCase()) &&
          transaction.amount.toString().includes(this.search) &&
          moment(transaction.transferred_at)
            .format("YYYY")
            .includes(this.selectedYear)
        );
      });
    },
  },
  methods: {
    startSynchronization() {
      this.$store.dispatch("setSync", {
        isSyncing: true,
        label: "Synchronizing Transactions",
      });
    },

    pageChanged(items) {
      this.currentpage = items;
    },

    plotChart() {
      // get all transactions
      const transactions = this.transactions;
      // get all transactions for the selected year
      const transactionsForYear = transactions.filter(
        (transaction) =>
          parseInt(moment(transaction.transferred_at).format("YYYY")) ===
          parseInt(this.selectedYear)
      );
      // get all transactions for the selected year
      const transactionsForYearGrouped = transactionsForYear.reduce(
        (acc, transaction) => {
          const month = moment(transaction.transferred_at).format("MMMM");
          const amount = transaction.amount;
          if (acc[month]) {
            acc[month] += amount;
          } else {
            acc[month] = amount;
          }
          return acc;
        },
        {}
      );

      // // get all status for the selected year
      // const transactionsForYearGroupedStatus = transactionsForYear.reduce(
      //   (acc, transaction) => {
      //     const status = transaction.status;
      //     if (acc[status]) {
      //       acc[status] += 1;
      //     } else {
      //       acc[status] = 1;
      //     }
      //     return acc;
      //   },
      //   {}
      // );

      // console.log(transactionsForYearGroupedStatus);

      // get all months
      // const months = Object.keys(transactionsForYearGrouped);
      // get all amounts
      const amounts = Object.values(transactionsForYearGrouped);
      // plot chart
      this.series = [
        {
          data: amounts,
        },
      ];

      // this.options.xaxis.overwriteCategories = months;
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
  watch: {
    selectedYear: {
      handler(val) {
        this.plotChart(val);
      },
      immediate: true,
      deep: true,
    },
  },

  async mounted() {
    this.loader = true;
    try {
      const response = await this.$Transaction.paystackTransactions();
      this.transactions = response.data.data;
      this.plotChart();
    } catch (error) {
      console.log(error);
    } finally {
      this.loader = false;
    }
  },
};
</script>
