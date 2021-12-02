<template>
  <div id="dasboard">
    <div class="w-100">
      <!-- <div class="d-flex justify-content-between align-items-center mt-5">
        <h4>Dotmac Technologies</h4>
        <div class="d-flex align-items-center gap-4">
          <md-icon>settings</md-icon>
          <BaseButton
            :exClass="'bg-primary text-white fw-bold rounded'"
            :label="'Syncronize data'"
          />
        </div>
      </div> -->

      <div class="p-0">
        <BaseCard
          :baseExClass="'border-0 shadow-sm'"
          :header="true"
          :exHeader="'border-0'"
        >
          <template slot="header">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-bold">Recent Activites</h6>
              <div class="d-flex align-items-center gap-4">
                <button class="btn badge--rounded">day</button>
                <button class="btn badge--rounded">week</button>
                <button class="btn badge--rounded">month</button>
                <button class="btn badge--rounded">year</button>
              </div>
            </div>
          </template>
          <div class="row">
            <div class="col-md-12">
              <BaseChart
                :height="'400rem'"
                :series="series"
                :options="options"
              />
            </div>
          </div>
        </BaseCard>
      </div>
      <div class="px-0">
        <div class="row w-100">
          <div class="col p-0">
            <BaseCard :baseExClass="'shadow-0  border-0 border-primary'">
              <div class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold">100,00.0</p>
                <p>Customers</p>
              </div>
            </BaseCard>
          </div>
          <div class="col p-0">
            <BaseCard :baseExClass="'shadow-0  border-0'">
              <div class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold">100,00.0</p>
                <p>Syncs</p>
              </div>
            </BaseCard>
          </div>
          <div class="col p-0">
            <BaseCard :baseExClass="'shadow-0  border-0'">
              <div class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold">100,00.0</p>
                <p>Activities</p>
              </div>
            </BaseCard>
          </div>
          <div class="col p-0">
            <BaseCard :baseExClass="'shadow-0  border-0'">
              <div class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold">100,00.0</p>
                <p>Databases</p>
              </div>
            </BaseCard>
          </div>
          <div class="col p-0">
            <BaseCard :baseExClass="'shadow-0 border-0'">
              <div class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold">100,00.0</p>
                <p>Sales Receipts</p>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-2 mt-5">
      <BaseCard :baseExClass="'border-0 shadow-sm'">
        <div class="row">
          <div class="col">
            <BaseCard
              :header="true"
              :baseExClass="'border-0 m-0 p-0'"
              :exHeader="'border-0'"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <h6 class="text-uppercase text-primary fw-bold">
                    New Customers
                  </h6>
                  <p class="text-uppercase text-primary fw-bold">500 total</p>
                </div>
              </template>
              <BaseChart :series="series2" :options="options" />
            </BaseCard>
          </div>
          <div class="col">
            <BaseCard
              :header="true"
              :baseExClass="'border-0 m-0 p-0'"
              :exHeader="'border-0'"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <h6 class="text-uppercase text-primary fw-bold">
                    Sales Receipts
                  </h6>
                  <p class="text-uppercase text-primary fw-bold">500 total</p>
                </div>
              </template>
              <BaseChart :series="series2" :options="options" />
            </BaseCard>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
// import BaseOverlay from "../../../components/partials/_overlay.vue";
// import BaseButton from "../../../components/forms/_button.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
// import BaseTable from "../../../components/layouts/_table.vue";
// import BaseInput from "../../../components/forms/_select.vue";
export default {
  name: "Dashboard",
  components: {
    // BaseButton,
    BaseCard,
    BaseChart,
  },
  data() {
    return {
      details: {},
      customers: [],
      loader: false,
      series: [
        {
          name: "series1",
          data: [140, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [170, 32, 100, 32, 34, 52, 41],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 201],
        },
      ],
      series2: [
        {
          name: "series1",
          data: [140, 40, 28, 51, 42, 109, 100],
        },
      ],
      tableData: [
        {
          name: "John Doe",
          age: "30",
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          type: "line",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            show: false,
          },
        },
        grid: {
          yaxis: {
            lines: {
              show: true,
            },
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
          },
          axisBorder: {
            labels: {
              show: true,
            },
          },
        },
        colors: ["#1a814c", "#58b77d", "#d3fadf"],
      },
    };
  },

  // async mounted() {
  //   this.loader = true;
  //   try {
  //     const overview = await this.$CustomerService.getOverview();
  //     const customers = await this.$CustomerService.customers();
  //     this.customers = customers.data.items.map((customer) => {
  //       return {
  //         name: customer.first_name + " " + customer.last_name,
  //         email: customer.email,
  //         phone: customer.phone,
  //         address: customer.address,
  //       };
  //     });
  //     this.details = overview.data;
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.loader = false;
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.badge--rounded {
  border-radius: 5% !important;
  outline: #b9bdc3 solid 1px;
  text-transform: capitalize;
  padding: 0.2rem 1rem;
  transition: 500ms ease-in-out;

  &:hover,
  &:focus {
    outline: #1a814c solid 1px;
    color: #1a814c;
  }
}

.fs-5 {
  font-size: 0.9rem !important;
  color: grey;
}

.input-base {
  outline: none !important;
}
</style>
