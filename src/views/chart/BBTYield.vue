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
      "4/1",
      "4/2",
      "4/3",
      "4/4",
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
        90.5, 93.4, 93.9, 92.2, 92.9, 92.7, 94.7, 93.9, 93.8, 93.2, 94.5, 93.4,
        94.8, 91.5, 94.1, 93.1, 95.3,
      ],
      label: {
        show: true,
        position: "top",
        formatter: "{c}%",
        color: "#fff",
        fontSize: 10,
      },

      itemStyle: { color: "#6495ed" },
    },
    {
      name: "最终良率",
      type: "line",
      smooth: true,
      data: [
        100.0, 99.4, 99.3, 99.4, 99.5, 99.3, 98.9, 99.8, 99.2, 99.4, 99.6, 99.3,
        99.3, 100.0, 98.7, 99.0, 99.3,
      ],
      itemStyle: { color: "#ff7f50" },
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
    left: "1",
    right: "3",
    bottom: "5",
    top: 35,
  },
});
</script>
