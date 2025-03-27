<template>
  <div>
    <ECharts :options="chartOptions" height="3.62rem"/>
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "C1钻孔总报废率",
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
    axisLabel: { rotate: 45, color: "#fff" },
  },

  yAxis: {
    type: "value",
    name: "百分比(%)",
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#ff0000" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      smooth: true,
      data: [0.48, 0.14, 0.23, 0.23, 0.24, 0.29, 0.0, 0.13, 0.0, 0.39],
      itemStyle: { color: "#6495ed" },
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
