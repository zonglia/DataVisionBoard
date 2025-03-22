<template>
  <div>
    <ECharts :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "日报费率 & 月报费率",
    left: "center",
    textStyle: {
      color: "#333",
      fontSize: 18,
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" }, // 交叉指示器
  },

  legend: {
    data: ["日报费率", "月报费率"],
    top: 30,
  },

  xAxis: {
    type: "category",
    data: [
      "03-01",
      "03-02",
      "03-03",
      "03-04",
      "03-05",
      "03-06",
      "03-07",
      "03-08",
      "03-09",
      "03-10",
      "03-11",
      "03-12",
      "03-13",
      "03-14",
    ],
    axisLabel: { rotate: 45 }, // 旋转角度
  },

  yAxis: [
    {
      type: "value",
      name: "日报费率(%)",
      position: "left",
      axisLabel: { formatter: "{value} %" },
      axisLine: { show: true },
    },
    {
      type: "value",
      name: "月报费率(%)",
      position: "right",
      axisLabel: { formatter: "{value} %" },
      axisLine: { show: true },
    },
  ],

  series: [
    {
      name: "日报费率",
      type: "line",
      yAxisIndex: 0, // 绑定左侧 Y 轴
      smooth: true, // 使曲线平滑
      data: [
        2.5, 3.0, 3.8, 4.2, 3.7, 4.5, 5.0, 4.8, 4.1, 3.9, 4.6, 4.8, 5.2, 4.9,
      ],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "月报费率",
      type: "bar",
      yAxisIndex: 1, // 绑定右侧 Y 轴
      data: [
        3.0, 3.2, 3.1, 3.3, 3.4, 3.6, 3.5, 3.7, 3.9, 4.0, 4.2, 4.1, 4.3, 4.4,
      ],
      itemStyle: { color: "#6495ed" },
    },
  ],

  grid: {
    containLabel: true,
  },
});
</script>

<style lang="scss" scoped></style>
