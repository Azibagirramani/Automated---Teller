<template>
  <div class="">
    <BaseOverlay :show="show">
      <BaseCard :header="true" :baseExClass="'p-0 m-0 border-0 rounded-0'">
        <template v-slot:header>
          <div class="d-flex justify-content-between">
            <h6 class="text-uppercase fw-bold">syncronization activities</h6>
            <div class="d-flex gap-4">
              <BaseSelect :items="months" />
              <BaseSelect :items="years" />
            </div>
          </div>
        </template>
        <BaseChart :series="series" :options="options" :height="height" />
      </BaseCard>
    </BaseOverlay>
  </div>
</template>

<script>
import BaseSelect from "../../../components/forms/_select.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseOverlay from "../../../components/partials/_overlay.vue";
import BaseChart from "../../../components/chart/_baseChart.vue";
export default {
  name: "synactivities",
  components: {
    BaseCard,
    BaseOverlay,
    BaseChart,
    BaseSelect,
  },
  data() {
    return {
      show: false,
      height: "300rem",
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
        colors: ["#1a814c", "#58b77d", "#d3fadf"],
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

<style lang="scss" scoped>

</style>
