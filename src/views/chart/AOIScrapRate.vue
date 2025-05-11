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
      "24Y",
      "25M1",
      "25M2",
      "25M3",
      "25M4",
      "5/3",
      "5/4",
      "5/5",
      "5/6"
    ],
    axisLabel: { color: "#fff", fontSize: 8 },
  },

  yAxis: {
    type: "value",
    // name: "百分比(%)",
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#fff" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      smooth: true,
      data: [0.67, 0, 0, 0.93, 1.12, 0, 2.0, 0.79,0],
      itemStyle: { color: "#6495ed" },
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
    bottom: 5,
    top: 20,
  },
});
</script>
