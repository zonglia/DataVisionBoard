<template>
  <div>
    <ECharts :options="chartOptions" height="2.45rem"/>
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
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "C3电镀镀厚",
      "C3电镀铜粒",
      "C3电镀板面污染",
      "C3电镀外力损伤",
    ],
    axisLabel: {
      rotate: 15,
      color: "#fff", // 字体颜色
      fontSize: 8, // 字体大小（单位：像素）
    },
  },

  yAxis: [
    {
      type: "value",
      position: "left",
      min: 0,
      max: 100,
      minInterval: 10,
      axisLabel: { formatter: "{value} %", color: "#ff0000" },
      axisLine: { show: true },
    },
    {
      type: "value",
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

      yAxisIndex: 0,
      data: [63.83, 16.24, 10.31, 5.85, 4.04],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1, // 渐变方向：从上到下（参数顺序：右、下、左、上）[5,7](@ref)
          [
            {
              offset: 0,
              color: "#005eaa",
            },
            {
              offset: 0.5,
              color: "#339ca8",
            },
            {
              offset: 1,
              color: "#cda819",
            },
          ]
        ),
      },
    },
    {
      name: "累计比率(%)",
      type: "line",
      yAxisIndex: 1,
      data: [63.83, 80.07, 90.38, 95.96, 100.0],
      itemStyle: { color: "#cda819" },
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
