<template>
  <ECharts :options="chartOptions" />
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

  xAxis: {
    type: "value", // 横轴改为数值轴
    name: "单位：PML",
    min: 0,
    max: 15,
    // minInterval: 100,
    axisLabel: { color: "#fff", fontSize: 10 },
    axisLine: { show: true },
      splitLine: { show: false }, // 隐藏X轴网格线
  },

  yAxis: {
    type: "category", // 纵轴改为类目轴
    data: ["在职人数", "出勤人数"],
    axisLabel: {
      color: "#fff",
      fontSize: 8,
    },
  
  },

  series: [
    {
      name: "人员出勤",
      type: "bar", // 柱状图（横向）
      data: [10, 12],
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
    right: "18",
  },
});
</script>
