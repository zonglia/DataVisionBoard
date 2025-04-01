<template>
  <div>
    <ECharts
      :options="chartOptions"
      height="2.45rem"
    />
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
    data: ["M2", "W09", "W10", "W11", "W12"],
    axisLabel: { rotate: 45, color: "#fff" },
  },

  yAxis: {
    type: "value",
    position: "left",
    name: "报废率统计\n(目标0.3%)",
    nameGap: -1,
    min: 0,
    max: 0.35,
    minInterval: 0.05,
    axisLabel: { formatter: "{value} %", color: "#ff0000", fontSize: 10 },
    axisLine: { show: true },
  },

  series: [
    {
      name: "报废目标(%)",
      type: "line",
      smooth: true,
      data: [0.3, 0.3, 0.3, 0.3, 0.3],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "报废率(%)",
      type: "line",
      data: [0.02, 0.0, 0.0, 0.02, 0.2],
      itemStyle: { color: "#cda819" },
    },
  ],

  grid: {
    containLabel: true,
    left: "1%",
    right: "1%",
    bottom: "0%",
    top: "20%",
  },
});
</script>
