<template>
  <div>
    <ECharts :options="chartOptions" height="2.75rem" />
  </div>
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
    data: ["比率(%)", "累计比率(%)"],
    top: 50,
    right: 0,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "成型外力损伤",
      "成型板损报废",
      "成型定位孔损",
      "成型烧焦",
      "成型多捞",
    ],
    axisLabel: {
      color: "#fff", // 字体颜色
      fontSize: 6, // 字体大小（单位：像素）
    },
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
      name: "比率(%)",
      type: "bar",
      smooth: true,
      data: [59.66, 19.41, 11.29, 4.84, 4.8],
      itemStyle: { color: "#ff7f50" },
    },
    {
      name: "累计比率(%)",
      type: "line",
      data: [59.66, 79.07, 90.36, 95.2, 100],
      itemStyle: { color: "#6495ed" },
    },
  ],

  grid: {
    containLabel: true,
    // left: "3%",
    // right: "5%", // 调整右侧间距
    // bottom: "15%", // 增加底部间距适应旋转标签
    top: "20%",
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
});
</script>
