<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  legend: {
    data: ["一次良率", "最终良率"],
    top: 0,
    right: 0,
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
  },

  xAxis: {
    type: "category",
   data: [
  "3/14",
  "3/15",
  "3/16",
  "3/17",
  "3/18",
  "3/19",
  "3/20",
  "3/21",
  "3/22",
  "3/23",
  "3/24",
  "3/25",
  "3/26",
  "3/28",
  "4/3",
  "4/8",
  "4/9"
],
    axisLabel: { rotate: 0, color: "#fff", fontSize: 10 },
  },

  yAxis: {
    type: "value",
    min: 70, // 强制最小值为 75%
    max: 100, // 强制最大值为 105%
    // minInterval: 1, // 最小刻度间隔为 5%（避免过密）
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#fff", fontSize: 10 },
    axisLine: { show: true },
    splitLine: { show: false }, // 隐藏Y轴网格线
  },

  series: [
    {
      name: "一次良率",
      type: "line",
      smooth: true,
      data: [
      75.2, 82.7, 87.3, 85.8, 85.8, 75.0, 82.1, 80.0, 82.4, 74.7, 76.7, 75.0, 80.1, 87.6, 75.1, 85.7, 75.0
    ],

      itemStyle: { color: "#6495ed" },
    },
    {
      name: "最终良率",
      type: "line",
      smooth: true,
     data: [
      99.2, 99.2, 99.3, 99.2, 99.3, 99.1, 99.0, 99.0, 98.7, 98.9, 98.6, 95.8, 97.9, 97.8, 97.5, 96.5, 92.3
    ],

      itemStyle: { color: "#ff7f50" },
    },
  ],

  grid: {
    containLabel: true,
    left: "1",
    right: "3",
    bottom: "5",
    top: 25,
  },
});
</script>
