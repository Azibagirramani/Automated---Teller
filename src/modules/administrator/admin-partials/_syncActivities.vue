<template>
  <div class="">
    <div class="row">
      <div class="col-md-9">
        <BaseOverlay :show="show">
          <BaseCard
            :header="false"
            :exHeader="'py-2 border-0'"
            :baseExClass="'p-0 m-0 border-0 rounded-0 bg-white shadow'"
          >
            <template v-slot:header>
              <div class="d-flex justify-content-between">
                <h6 class="text-uppercase text-dark">
                  Customer synchronizations
                </h6>
              </div>
            </template>
            <BaseChart :series="series" :options="options" :height="height" />
          </BaseCard>
        </BaseOverlay>
      </div>
      <div class="col-md-3">
        <BaseCard :baseExClass="'border-0'">
          <div class="">
            <BaseChart
              :series="polarisChart.series"
              :options="polarisChart.options"
              :height="height"
            />
          </div>
        </BaseCard>
      </div>
    </div>

    <div class="mt-4">
      <BaseCard :header="true" :exHeader="'border-0'" :baseExClass="'border-0'">
        <template v-slot:header>
          <div class="d-flex justify-content-end">
            <div class="d-flex gap-4" v-if="started">
              <md-button class="md-raised bg-danger text-white">Stop</md-button>
            </div>
          </div>
        </template>
        <BaseState
          :description="'click on the -start- button to begin proccess '"
        >
          <md-button
            class="md-raised text-white bg-primary"
            @click="active = true"
            >Start</md-button
          >
        </BaseState>
      </BaseCard>
    </div>

    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Start Customer Synchronization?"
      md-content="Customer Data Synchronization...................................."
      md-confirm-text="Yes"
      md-cancel-text="NO"
    />
  </div>
</template>

<script>
import BaseState from "../../../components/partials/_empty.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseOverlay from "../../../components/partials/_overlay.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
export default {
  name: "synactivities",
  components: {
    BaseCard,
    BaseOverlay,
    BaseChart,
    BaseState,
  },
  data() {
    return {
      active: false,
      started: false,
      polarisChart: {
        series: [42, 47, 100],
        options: {
          chart: {
            type: "polarArea",
          },
          colors: ["#0E1635", "#0E1731", "#6374E3"],
          legend: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0,
              },
              spokes: {
                strokeWidth: 0,
              },
            },
          },
          labels: ["Add", "Patch", "Unknown"],
        },
      },
      show: false,
      height: "200em",
      months: [
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
      years: ["2021"],
      options: {
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
          type: "bar",
        },
        colors: ["#0E1635", "#0E1731", "#6374E3"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
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
      series: [
        {
          name: "Addeded unique customer",
          data: [44, 55, 41, 67, 22, 43, 22, 43, 22, 43, 22, 43],
        },
        {
          name: "Updated unique customers",
          data: [13, 23, 20, 8, 13, 27, 13, 27, 13, 27, 13, 27],
        },
        {
          name: "Failed to perform actions",
          data: [11, 17, 15, 15, 21, 14, 21, 11, 21, 11, 21, 14],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
