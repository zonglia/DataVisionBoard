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
    data: ["报废目标(%)", "报废率(%)"],
    textStyle: {
      color: "#fff",
    },
    right: 0,
  },

  xAxis: {
    type: "category",
    data: [
      "2024",
      "25M01",
      "25M02",
      "25M03",
      "25M04",
      "25W18",
      "5-4",
      "5-5",
      "5-6",
      "5-7",
      "5-8",
    ],
    axisLabel: { rotate: 45, color: "#fff" },
  },

  yAxis: {
    type: "value",
    position: "left",
    // name: "报废率统计\n(目标1.2%)",
    nameGap: 0,
    min: 0,
    max: 3,
    // minInterval: 2,
    axisLabel: { formatter: "{value} %", color: "#fff" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      data: [1.68, 0.0, 0.0, 0.72, 0.8, 0.82, 0.66, 0.05, 0.0, 0.0, 0.0],
      itemStyle: { color: "#cda819" },
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
    left: 0,
    right: 1,
    bottom: 0,
    top: 20,
  },
});
</script>
