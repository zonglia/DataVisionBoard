<template>
  <div>
    <ECharts :options="chartOptions" height="5.34rem" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "AOI良率趋势",
    left: 100,
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 18,
    },
  },
  legend: {
    data: ["一次良率", "最终良率"],
    top: 20,
    right: 0,
    textStyle: {
      color: "#fff",
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  xAxis: {
    type: "category",
    data: [
      "3月2日",
      "3月4日",
      "3月6日",
      "3月8日",
      "3月10日",
      "3月12日",
      "3月14日",
      "3月16日",
      "3月18日",
      "3月20日",
      "3月22日",
      "3月24日",
      "3月26日",
    ],
    axisLabel: { rotate: 45, color: "#fff" },
  },

  yAxis: [
    {
      type: "value",
      position: "left",
      min: 0,
      max: 110,
      minInterval: 10,
      axisLabel: { formatter: "{value} %", color: "#ff0000" },
      axisLine: { show: true },
    },
  ],

  series: [
    {
      name: "一次良率",
      type: "line",
      smooth: true,
      data: [
        81.4, 83.3, 82.0, 79.7, 80.7, 79.4, 80.1, 83.7, 83.0, 80.4, 83.7, 79.7,
        78.4,
      ],
      itemStyle: { color: "#6495ed" },
    },
    {
      name: "最终良率",
      type: "line",
      smooth: true,
      data: [
        97.1, 99.3, 98.7, 99.0, 100.0, 99.0, 99.7, 100.0, 100.0, 99.3, 98.4,
        98.7, 99.0,
      ],
      itemStyle: { color: "#ff7f50" },
    },
  ],

  grid: {
    containLabel: true,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "20%",
  },
});
</script>
