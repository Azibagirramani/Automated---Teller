<template>
  <div class="">
    <div class="w-100 mt-5">
      <h5 class="fw--6 text-capitalize fc--primary-dark-shade">
        Customer syncronization
      </h5>

      <div class="row bg-primary py-5">
        <div class="col"></div>
        <div class="col"></div>
      </div>

      <!-- customer sync type -->
      <div class="row mt-5">
        <div
          class="col"
          v-for="(item, index) in items"
          :key="index"
          @click="showProgress(item)"
        >
          <BaseCard
            :baseExClass="'border-0 rounded-0 card--hover'"
            :exClass="'text-center'"
            v-b-tooltip.hover
            :title="item.description"
          >
            <h4 class="fw--6">{{ item.title }}</h4>
          </BaseCard>
        </div>
      </div>

      <!-- customer sync progress -->
      <div class="row mt-5">
        <div class="col-md-12">
          <BaseCard :header="true">
            <template v-slot:header>
              <div class="text-start">
                <p class="fs--8 fw--6 text-uppercase">{{ syncValue.title }}</p>
              </div>
            </template>
            <div class="">
              <BaseChart
                :options="options"
                :series="series"
                :height="'250rem'"
              />

              <div class="d-flex justify-content-center mt-5">
                <div class="container text-center">
                  <p>Here</p>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
export default {
  data() {
    return {
      options: {
        chart: {
          type: "line",
          height: "100%",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
        },
        colors: ["#7367F0"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
        {
          name: "Low - 2013",
          data: [7, 9, 11, 8, 7, 3, 1],
        },
      ],
      syncValue: {},
      items: [
        {
          title: "Splynx Synchronize",
          description: "Synchronize Splynx customers to database",
          value: "splynx",
        },
        {
          title: "Paystack Synchronize",
          description: "Synchronize Paystack customers with database",
          value: "paystack",
        },
        {
          title: "Quickbooks Synchronize",
          description: "Synchronize Quickbooks customers with database",
          value: "quickbooks",
        },
      ],
    };
  },
  components: {
    BaseCard,
    BaseChart,
  },
  methods: {
    showProgress(e) {
      // console.log(e);
      this.syncValue = e;
    },
  },
};
</script>
