<template>
  <div id="dasboard">
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center mt-5">
        <h4>Dotmac Technologies</h4>
        <div class="d-flex align-items-center gap-4">
          <md-icon>settings</md-icon>
          <BaseButton
            :exClass="'bg-primary text-white fw-bold rounded'"
            :label="'Syncronize data'"
          />
        </div>
      </div>

      <div class="mt-5">
        <div class="row w-100">
          <div
            class="col p-0"
          >
            <BaseCard :baseExClass="'md-elevation-0'">
              <div class="d-flex flex-column align-items-center">
                <p>Customers</p>
                <p class="fs-4 fw-bold">100,00.0</p>
              </div>
            </BaseCard>
          </div>
          <div
            class="col p-0"
          >
            <BaseCard :baseExClass="'md-elevation-0'">
              <div class="d-flex flex-column align-items-center">
                <p>Customers</p>
                <p class="fs-4 fw-bold">100,00.0</p>
              </div>
            </BaseCard>
          </div>
          <div
            class="col p-0"
          >
            <BaseCard :baseExClass="'md-elevation-0'">
              <div class="d-flex flex-column align-items-center">
                <p>Customers</p>
                <p class="fs-4 fw-bold">100,00.0</p>
              </div>
            </BaseCard>
          </div>
          <div
            class="col p-0"
          >
            <BaseCard :baseExClass="'md-elevation-0'">
              <div class="d-flex flex-column align-items-center">
                <p>Customers</p>
                <p class="fs-4 fw-bold">100,00.0</p>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>

      <div class="mt-5 p-0">
        <BaseChart :height="'320rem'" :series="series" :options="options" />
      </div>

      <div class="mt-5">
        <BaseTable />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../components/forms/_button.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
import BaseTable from "../../../components/layouts/_table.vue";
export default {
  name: "Dashboard",
  components: {
    BaseButton,
    BaseCard,
    BaseChart,
    BaseTable,
  },
  data() {
    return {
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
      options: {
        legend: {
          show: false,
        },
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
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
              show: true,
            },
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        colors: ["#1a814c", "#58b77d", "#d3fadf"],
      },
    };
  },
};
</script>
