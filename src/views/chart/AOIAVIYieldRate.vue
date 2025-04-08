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
    data: ["一次良率(%)", "最终良率(%)"],
    top: 0,
    right: 0,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "3月28日",
      "3月29日",
      "3月30日",
      "3月31日",
      "4月1日",
      "4月2日",
      "4月3日",
    ],
    axisLabel: {  color: "#fff", fontSize: 8 },
  },

  yAxis: {
    type: "value",
    // name: "百分比(%)",
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#fff" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "一次良率(%)",
      type: "line",
      smooth: true,
      data: [77.7, 78.9, 79.9, 79.6, 83.3, 80.9, 78.1],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "最终良率(%)",
      type: "line",
      smooth: true,
      data: [99.6, 99.0, 99.3, 99.5, 99.3, 98.8, 99.0],
      itemStyle: { color: "#6495ed" },
    },
  ],

  grid: {
    containLabel: true,
    left: 3,
    right: 2,
    bottom: 3,
    top: 25,
  },
});
</script>
