<template>
  <div>
    <ECharts :options="chartOptions" height="2.4rem" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
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
    data: ["3-30", "3-31", "4-1", "4-2", "4-3", "4-7", "4-8"],
    axisLabel: { rotate: 45, color: "#fff" },
  },

  yAxis: {
    type: "value",
    position: "left",
    // name: "报废率统计\n(目标1.2%)",
    nameGap: 0,
    // min: 0,
    // max: 10,
    // minInterval: 2,
    axisLabel: { formatter: "{value} %", color: "#fff" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      data: [0.0, 1.29, 0.15, 0.49, 1.92, 0.0, 1.19],
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
    left: "0%",
    right: "1%",
    bottom: "0%",
    top: "20%",
  },
});
</script>
