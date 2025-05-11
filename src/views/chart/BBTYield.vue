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
      "4/20",
      "4/21",
      "4/22",
      "4/23",
      "4/24",
      "4/25",
      "4/26",
      "4/27",
      "4/28",
      "4/29",
      "4/30",
      "5/3",
      "5/4",
      "5/5",
      "5/6",
      "5/7",
      "5/8",
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
        94.8, 91.5, 94.1, 93.1, 95.3, 90.0, 89.0, 86.2, 74.6, 75.0, 90.0, 90.4,
        80.4, 91.7, 90.4, 88.8, 90.9,
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
        99.3, 100.0, 98.7, 99.0, 99.3, 99.3, 99.1, 99.1, 99.4, 99.7, 99.5, 99.0,
        99.4, 99.5, 99.2, 98.8, 99.7,
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
