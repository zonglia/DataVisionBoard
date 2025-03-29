<template>
  <div>
    <ECharts :options="chartOptions" height="2.6rem" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";
import * as echarts from "echarts";

const chartOptions = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  legend: {
    data: ["比率(%)", "累计比率(%)"],
    top: 0,
    left: 85,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: ["外层膜皱开路", "外层赃物开路", "外层曝光不良", "外层蚀刻不净", ""],
    axisLabel: {
      color: "#fff", // 字体颜色
      fontSize: 6, // 字体大小（单位：像素）
    },
  },

  yAxis: [
    {
      type: "value",
      name: "百分比(%)",
      position: "left",
      min: 0,
      max: 100,
      minInterval: 10,
      axisLabel: { formatter: "{value} %", color: "#ff0000" },
      axisLine: { show: true },
    },
    {
      type: "value",
      name: "百分比(%)",
      position: "right",
      min: 0,
      max: 120,
      minInterval: 20,
      axisLabel: { formatter: "{value} %", color: "#ff0000" },
      axisLine: { show: true },
    },
  ],

  series: [
    {
      name: "比率(%)",
      type: "bar",
      smooth: true,
      data: [25.57, 20.62, 19.91, 18.08, 15.81],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1, // 渐变方向：从上到下
          [
            { offset: 0, color: "#00A86B" }, // 深绿色（替代原蓝色）
            { offset: 0.5, color: "#FFD700" }, // 金色（过渡色）
            { offset: 1, color: "#FF6B6B" }, // 珊瑚红（终点色）
          ]
        ),
      },
      yAxisIndex: 0, //绑定左侧
    },
    {
      name: "累计比率(%)",
      type: "line",
      data: [25.57, 46.2, 66.1, 84.19, 100.0],
      itemStyle: { color: "#cda819" },
      yAxisIndex: 1,
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
