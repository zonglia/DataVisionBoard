<template>
  <div>
    <ECharts :options="chartOptions" height="3.62rem" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";
import * as echarts from "echarts";

const chartOptions = ref({
  title: {
    text: "电测报废分析",
    left: 18,
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 11,
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  // legend: {
  //   data: ["比率(%)", "累计比率(%)"],
  //   top: 50,
  //   right: 0,
  //   textStyle: {
  //     color: "#fff",
  //   },
  // },

  xAxis: {
    type: "category",
    data: ["防焊异物", "防焊刮伤", "曝光不良"],
    axisLabel: {
      color: "#fff", // 字体颜色
      fontSize: 8, // 字体大小（单位：像素）
      rotate: 30,
    },
  },

  yAxis: [
    {
      type: "value",
      //   name: "百分比(%)",
      position: "left",
      min: 0,
      max: 2.5,
      minInterval: 0.5,
      axisLabel: { color: "#ff0000", fontSize: 10 },
      axisLine: { show: true },
    },
    {
      type: "value",
      //   name: "百分比(%)",
      position: "right",
      min: 0,
      max: 50,
      interval: 10,
      axisLabel: { formatter: "{value} %", color: "#ff0000", fontSize: 10 },
      axisLine: { show: true },
    },
  ],

  series: [
    {
      name: "比率(%)",
      type: "bar",
      smooth: true,
      data: [2, 2, 1],
      yAxisIndex: 0, //绑定左侧
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
      yAxisIndex: 1, //绑定右侧
      data: [40.0, 40.0, 20.0],
      itemStyle: { color: "#cda819" },
    },
  ],

  grid: {
    containLabel: true,
    // left: "3%",
    // right: "5%", // 调整右侧间距
    // bottom: "15%", // 增加底部间距适应旋转标签
    top: "10%",
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
});
</script>
