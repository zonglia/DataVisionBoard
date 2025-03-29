<template>
  <div>
    <ECharts :options="chartOptions" height="2.67rem"  />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "外层总报废率",
    left: 100,
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 18,
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  legend: {
    data: ["报废目标(%)", "报废率(%)"],
    top: 23,
    right: 15,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "24W45",
      "24W46",
      "24W47",
      "24W48",
      "24M11",
      "24W49",
      "24W50",
      "24W51",
      "24W52",
      "24M12",
    ],
    axisLabel: {  color: "#fff" ,fontSize: 5},
  },

  yAxis: {
    type: "value",
    name: "百分比(%)",
      position: "left",
  
    min: 0,
    max: 1.6,
    minInterval: 0.2,
    axisLabel: { formatter: "{value} %", color: "#ff0000" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      smooth: true,
      data: [0.9, 0.96, 0.26, 0.63, 0.61, 0.6, 0.67, 0.45, 0.61, 0.6],
      itemStyle: { color: "#6495ed" },
    },
  ],

  grid: {
    containLabel: true,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "24%",
  },
});
</script>
