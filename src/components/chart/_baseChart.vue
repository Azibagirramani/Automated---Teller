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
          height: "100%",
        },
        markers: {
          size: 2,
          colors: ["#fff"],
        },
        tooltip: {
          enabled: false,
          theme: false,
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
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
          data: [1, 2, 3, 8, 10, 5, 4, 1],
        },
        {
          data: [2, 1, 8, 1, 9, 7, 5, 3],
        },
        {
          data: [9, 7, 5, 2, 8, 0, 8, 3],
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
