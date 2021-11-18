<template>
  <div class="" id="chart-component">
    <apexchart
      :options="options"
      :series="series"
      :height="height"
      :width="width"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "chart-component",
  props: {
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    options: {
      type: Object,
      default: () => ({
        chart: {
          toolbar: {
            show: false,
          },
          type: "line",
          width: "100%",
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
      }),
    },
    series: {
      type: Array,
      default: () => [
        {
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    },
  },
  data() {
    return {};
  },
  watch: {
    options: {
      handler(val) {
        this.chart.updateOptions(val);
      },
    },
    deep: true,
    immediate: true,
  },
  series: {
    handler(val) {
      this.chart.updateSeries(val);
    },
    deep: true,
    immediate: true,
  },
};
</script>

<style lang="scss" scoped></style>
