<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  // title: {
  //   text: "钻孔总报废率",
  //   left: 100,
  //   top: 0,
  //   textStyle: {
  //     color: "#fff",
  //     fontSize: 18,
  //   },
  // },

  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  legend: {
    data: ["报废目标(%)", "报废率(%)"],
    top: 0,
    right: 0,
    textStyle: {
      color: "#fff",
      fontSize: 8,
    },
  },

  xAxis: {
    type: "category",
    data: [
      "25W07",
      "25W08",
      "25W09",
      "25W10",
      "25W11",
      "25W12",
      "25W13",
      "25W14",
    ],
    axisLabel: { rotate: 45, color: "#fff", fontSize: 8 },
  },

  yAxis: {
    type: "value",
    // name: "百分比(%)",
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#fff", fontSize: 8 },
    splitLine: { show: true, color: 'rgba(0, 0, 0, 0.3)',}, // 隐藏Y轴网格线
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      smooth: true,
      data: [0.52, 0.43, 0.32, 0.21, 0.0, 0.0, 0.0, 0.0],
      itemStyle: { color: "#6495ed" },
      label: {
        show: true,
        position: "top",
        formatter: "{c}%",
        color: "#fff",
        fontSize: 10,
      },
    },
  ],

  grid: {
    containLabel: true,
    left: 3,
    right: 2,
    bottom: 3,
    top: 20,
  },
});
</script>
