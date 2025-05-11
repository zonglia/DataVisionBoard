<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";
import * as echarts from "echarts";

const chartOptions = ref({
  title: {
    text: "月累计产出",
    left: "center",
    top: -3,
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  xAxis: {
    type: "value", // 横轴改为数值轴
    name: "单位：U",
    // min: 0,
    // max: 20000,
    // minInterval: 100,
    nameTextStyle: {
      color: "#fff", // 确保颜色与背景对比明显
      fontSize: 9, // 调整字体大小
      padding: [0, 0, 0, -25], // 调整位置（右下左上顺序）
    },
    axisLabel: { color: "#fff", fontSize: 10 },
    axisLine: { show: true },
    splitLine: { show: false }, // 隐藏X轴网格线
  },

  yAxis: {
    type: "category", // 纵轴改为类目轴
    data: ["电测", "OSP", "AVI", "包装"],
    axisLabel: {
      color: "#fff",
      fontSize: 8,
    },
  },

  series: [
    {
      name: "工序WIP",
      type: "bar", // 柱状图（横向）
      data: [15072, 15072, 14820, 14160],
      label: {
        // 添加数据标签配置
        show: true, // 显示标签
        position: "right", // 标签显示在柱体右侧
        color: "#fff", // 标签文字颜色
        fontSize: 10, // 标签文字大小
        formatter: "{c}", // 显示数据值
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          1, // 渐变方向改为从左到右（1,0,0,0）
          0,
          0,
          0,
          [
            { offset: 0, color: "#005eaa" },
            { offset: 0.5, color: "#339ca8" },
            { offset: 1, color: "#cda819" },
          ]
        ),
      },
    },
  ],

  grid: {
    containLabel: true,
    top: "10%",
    bottom: "0",
    left: "3",
    right: "25",
  },
});
</script>
