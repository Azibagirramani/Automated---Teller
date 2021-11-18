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
        stroke: {
          width: 1,
          curve: "straight",
          colors: ["#fff"],
          dashArray: 0,
          lineCap: "butt",
        },
        fill: {
          colors: ["#fff"],
        },
        xaxis: {
          show: true,
          crosshairs: {
            show: true,
            width: 2,
            opacity: 1,
          },
          labels: {
            show: false,
          },
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          style: {
            colors: ["#fff"],
          },
        },
        yaxis: {
          show: false,
        },
        legend: {
          show: false,
        },
      },
      series: [
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
