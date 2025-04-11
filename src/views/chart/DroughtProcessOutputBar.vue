<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";
import * as echarts from "echarts";

const chartOptions = ref({
  title: {
    text: "日产出",
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
    data: ["防焊", "文字"],
    axisLabel: {
      color: "#fff", // 字体颜色
      fontSize: 8, // 字体大小（单位：像素）
      //   rotate: 30,
    },
  },

  yAxis: [
    {
      type: "value",
      // name: "单位：PML",
      position: "left",
      min: 0,
      max: 4000,
      minInterval: 100,
      axisLabel: { color: "#fff", fontSize: 10 },
      axisLine: { show: true },
      splitLine: { show: false }, // 隐藏Y轴网格线
    },
  ],

  series: [
    {
      name: "日产出",
      type: "bar",
      smooth: true,
      data: [1970, 1970],
        label: {
        // 添加数据标签配置
        show: true, // 显示标签
        position: "top", // 标签显示在柱体上
        color: "#fff", // 标签文字颜色
        fontSize: 10, // 标签文字大小
        formatter: "{c}", // 显示数据值
      },
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
  ],

  grid: {
    containLabel: true,
    // left: "3%",
    // right: "5%", // 调整右侧间距
    // bottom: "15%", // 增加底部间距适应旋转标签
    top: "10%",
    bottom: "0",
    left: "3",
    right: "2",
  },
});
</script>
