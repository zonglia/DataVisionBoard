<template>
  <div>
    <ECharts :options="chartOptions" height="4.68rem" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "电测良率趋势",
    left: 70,
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 11,
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  legend: {
    data: ["BBT良率", "AVI良率"],
    top: 23,
    right: 15,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "12/16",
      "12/17",
      "12/18",
      "12/19",
      "12/20",
    ],
    axisLabel: { rotate: 0, color: "red", fontSize: 10 },
  },

  yAxis: {
    type: "value",
    name: "百分比(%)",
    min: 90, // 强制最小值为 75%
    max: 100, // 强制最大值为 105%
    minInterval: 1, // 最小刻度间隔为 5%（避免过密）
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#ff0000",fontSize: 10 },
    axisLine: { show: true },
  },

  series: [
    {
      name: "BBT良率",
      type: "line",
      smooth: true,
      data: [93.7, 94.0, 94.9, 95.8, 95.6],
      itemStyle: { color: "#6495ed" },
    },
    {
      name: "AVI良率",
      type: "line",
      smooth: true,
      data: [99.0, 98.9, 99.1, 99.1, 99.3],
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
