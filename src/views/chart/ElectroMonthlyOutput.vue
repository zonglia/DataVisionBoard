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
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 15,
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  xAxis: {
    name: "单位：P",
    nameTextStyle: {
      color: "#fff", // 确保颜色与背景对比明显
      fontSize: 8, // 调整字体大小
      padding: [0, 0, 0, -14], // 调整位置（右下左上顺序）
    },
    type: "value", // 横轴改为数值轴
    axisLabel: { color: "#fff", fontSize: 7 },
    axisLine: { show: true },
    splitLine: { show: false }, // 隐藏X轴网格线
  },

  yAxis: {
    type: "category", // 纵轴改为类目轴
    data: ["后处理", "电镀","日蚀"],
    axisLabel: {
      color: "#fff",
      fontSize: 8,
    },
  },

  series: [
    {
      name: "月累计产出",
      
      type: "bar", // 柱状图（横向）
      data: [21600, 18000,18000],
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
    top: 30,
    bottom: "0",
    left: "3",
    right: 30,
  },
});
</script>
