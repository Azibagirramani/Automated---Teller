<template>
  <div id="Dashboard">
    <div class="row">
      <div class="col-md-9">
        <!-- top summary  -->
        <div class="row">
          <div class="col-md-4">
            <BaseCard
              :footer="true"
              :baseExClass="'shadow border-0 bg-primary'"
            >
              <div>
                <h5 class="text-white fw-lighter">Active Customers</h5>
                <h1 class="text-white">{{ 75 }}</h1>
              </div>
              <template v-slot:footer>
                <div class="">
                  <a href="#" class="text-white">View all customers</a>
                </div>
              </template>
            </BaseCard>
          </div>
          <div class="col-md-8">
            <BaseCard
              :baseExClass="'border-0 shadow-0'"
              :exHeader="'border-0'"
              :exFooter="'border-0 bg-transparent'"
              :header="true"
              :footer="true"
            >
              <template v-slot:header>
                <h6 class="text-dark">Activites per day</h6>
              </template>
              <template v-slot:footer>
                <div class="d-flex gap-3 align-items-center">
                  <a href="#" class="text-dark">View all status</a>
                  <b-icon
                    icon="arrow-right"
                    scale="1.5"
                    variant="dark"
                    class="mt-1"
                  ></b-icon>
                </div>
              </template>
              <div></div>
            </BaseCard>
          </div>
        </div>

        <!-- card content  -->
        <div class="row mt-3">
          <div class="col" v-for="items in summary" :key="items.toString()">
            <BaseCard
              :header="true"
              :exHeader="'py-0 border-0 mt-2'"
              :baseExClass="'border-0 shadow-0 py-0'"
              :exClass="'py-0'"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <p class="text-dark fw-base">{{ items.name }}</p>
                  <p class="text-success fs--8">
                    <b-icon icon="arrow-up"></b-icon> 20
                  </p>
                </div>
              </template>
              <h1 class="text-dark">{{ items.value }}</h1>
            </BaseCard>
          </div>
        </div>

        <!-- notification content -->
        <div class="mt-3">
          <BaseCard :baseExClass="'border-2 rounded-3'">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-3 ml-5">
                <b-icon icon="bell" variant="dark" font-scale="2"></b-icon>
                <div class="d-flex flex-column">
                  <p class="m-0 p-0 fw-bold">No alerts set</p>
                  <p class="m-0 p-0 fs-5">
                    Get notified when data synchronization starts and finishes
                  </p>
                </div>
              </div>
              <BaseButton
                :label="'Set alert'"
                :type="'button'"
                :exClass="'border-2'"
              />
            </div>
          </BaseCard>
        </div>

        <!-- database and device summary -->
        <div class="mt-3">
          <div class="row">
            <div class="col">
              <BaseCard
                :header="true"
                :baseExClass="'border-0 p-0'"
                :exHeader="'border-0'"
                :exClass="'p-0'"
              >
                <template v-slot:header>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="text-dark">Databases</h6>
                  </div>
                </template>
                <md-list>
                  <md-list-item class="m-0 p-0">
                    <span class="md-list-item-text">Customers</span>

                    <md-button class="md-icon-button md-list-action">
                      2k
                    </md-button>
                  </md-list-item>
                  <md-list-item>
                    <span class="md-list-item-text">Sales Receipts</span>

                    <md-button class="md-icon-button md-list-action">
                      5k
                    </md-button>
                  </md-list-item>
                  <md-list-item>
                    <span class="md-list-item-text">Backup storage</span>

                    <md-button class="md-icon-button md-list-action">
                      10k
                    </md-button>
                  </md-list-item>
                </md-list>
              </BaseCard>
            </div>
            <div class="col">
              <BaseCard
                :header="true"
                :baseExClass="'border-0'"
                :exHeader="'border-0'"
              >
                <template v-slot:header>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="text-dark">Networking</h6>
                  </div>
                </template>
                <div class="text-center">
                  <h2>No Network</h2>
                </div>
              </BaseCard>
            </div>
            <div class="col">
              <BaseCard
                :header="true"
                :baseExClass="'border-0'"
                :exHeader="'border-0'"
              >
                <template v-slot:header>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="text-dark">Device</h6>
                  </div>
                  <div class="text-center">
                    <h2>No Devices</h2>
                  </div>
                </template>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <BaseCard :baseExClass="'border-0'">
          <md-list>
            <md-subheader class="fw-bold text-dark"
              >Recent Activities</md-subheader
            >
            <md-list-item>
              <span class="md-list-item-text">/usr/bin</span>
            </md-list-item>
            <md-list-item>
              <span class="md-list-item-text">/usr/bin</span>
            </md-list-item>
            <md-list-item>
              <span class="md-list-item-text">/usr/bin</span>
            </md-list-item>
            <md-list-item>
              <span class="md-list-item-text">/usr/bin</span>
            </md-list-item>
            <md-list-item>
              <span class="md-list-item-text">/usr/bin</span>
            </md-list-item>
          </md-list>
          <BaseCard
            :baseExClass="'border-0 shadow bg-warning'"
            :exHeader="'border-0'"
            :header="true"
          >
            <template v-slot:header>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="text-white fs-6 fw-bold text-capitalize">
                  More stats
                </h5>
                <md-button class="md-icon-button md-primary">
                  <md-icon class="text-white">arrow_forward_ios</md-icon>
                </md-button>
              </div>
            </template>
            <div class="p-0 text-white">
              <p class="m-0">More stats</p>
              <h3>42k</h3>
              <p class="m-0 pt-3">More stats</p>
              <h3>42k</h3>
            </div>
          </BaseCard>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
// import BaseState from "../../../components/partials/_empty.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseButton from "../../../components/forms/_button.vue";
export default {
  name: "Dashboard",
  components: {
    BaseCard,
    BaseButton,
    // BaseState
  },
  data() {
    return {
      summary: [
        {
          name: "Customers",
          value: "2k",
        },
        {
          name: "Transactions",
          value: "8k",
        },
        {
          name: "Activities",
          value: "5k",
        },
        {
          name: "Active Proccess",
          value: "4",
        },
      ],
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
          data: [
            140, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100, 140, 40,
            28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100,
          ],
        },
      ],
      tableData: [
        {
          name: "John Doe",
          age: "30",
        },
      ],
      options2: {
        legend: {
          show: false,
        },
        chart: {
          type: "bar",
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
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
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
            show: false,
          },
          axisBorder: {
            labels: {
              show: false,
            },
          },
        },
        colors: ["black", "#58b77d", "#d3fadf"],
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
