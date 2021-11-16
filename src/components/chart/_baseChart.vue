<template>
  <div class="" id="chart-component">
    <apexchart
      :options="options"
      :series="series"
      height="100%"
      width="100%"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "chart-component",
  data() {
    return {
      options: {
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
        xaxis: {
          show: false,
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        yaxis: {
          show: false,
        },
      },
      series: [
        {
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
