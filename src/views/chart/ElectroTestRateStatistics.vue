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
     fontSize: 10
    },
  },

  xAxis: {
    type: "category",
    data: [
      "3/12",
      "3/13",
      "3/14",
      "3/15",
      "3/16",
      "3/17",
      "3/18",
      "3/19",
      "3/20",
      "3/22",
      "3/23",
      "3/24",
      "3/26",
    ],
    axisLabel: { rotate: 0, color: "#fff", fontSize: 10 },
  },

  yAxis: {
    type: "value",
    min: 86, // 强制最小值为 75%
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
        90.5, 93.4, 93.85, 92.17, 92.92, 92.74, 94.75, 93.88, 93.76, 93.19,
        94.54, 93.4, 94.75,
      ],

      itemStyle: { color: "#6495ed" },
    },
    {
      name: "最终良率",
      type: "line",
      smooth: true,
      data: [
        100.0, 99.45, 99.27, 99.44, 99.53, 99.34, 98.85, 99.78, 99.23, 99.42,
        99.56, 99.34, 99.34,
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
