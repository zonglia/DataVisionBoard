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
    data: ["报废目标(%)", "报废率(%)"],
    top: 0,
    right: 0,
    textStyle: {
      color: "#fff",
    },
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
    axisLabel: { rotate: 45, color: "#fff", fontSize: 8 },
  },

  yAxis: {
    type: "value",
    // name: "百分比(%)",
    position: "left",
    min: 0,
    max: 0.3,
    interval: 0.04, // 刻度间隔设为0.02
    axisLabel: { formatter: "{value} %", color: "#fff" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      smooth: true,
      data: [0.24, 0.0, 0.0, 0.0, 0.03, 0.04, 0.05, 0.0, 0.0, 0.0, 0.0],
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
    left: 3,
    right: 2,
    bottom: 3,
    top: 20,
  },
});
</script>
