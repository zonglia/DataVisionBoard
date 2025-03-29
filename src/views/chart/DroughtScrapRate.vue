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
    position: "left",
    name: "报废率统计\n(目标1.2%)",
    nameGap: 0,
    min: 0,
    max: 10,
    minInterval: 2,
    axisLabel: { formatter: "{value} %", color: "#ff0000" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      data: [0.87, 1.06, 0.43, 1.21, 0.9, 1.11, 2.42, 4.64, 3.46, 2.33],
      itemStyle: { color: "#cda819" },
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
