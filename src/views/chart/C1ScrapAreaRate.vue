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

  legend: {
    data: ["比率(%)", "累计比率(%)"],
    top: 0,
    right: 0,
    textStyle: {
      color: "#fff",
    },
  },

  xAxis: {
    type: "category",
    data: [
      "钻孔单孔偏孔",
      "钻孔？锋",
      "钻孔外力损伤",
      "钻孔偏孔报废",
      "钻孔漏钻",
    ],
    axisLabel: {
      color: "#fff", // 字体颜色
      fontSize: 6, // 字体大小（单位：像素）
    },
  },

  yAxis: {
    type: "value",
    // name: "百分比(%)",
    position: "left",
    axisLabel: { formatter: "{value} %", color: "#ff0000" },
    axisLine: { show: true },
  },

  series: [
    {
      name: "比率(%)",
      type: "bar",
      smooth: true,
      data: [64.22, 19.34, 13.78, 1.33, 1.33],
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
      data: [64.22, 83.56, 97.34, 98.67, 100],
      itemStyle: { color: "#cda819" },
    },
  ],

  grid: {
    containLabel: true,
    // left: "3%",
    // right: "5%", // 调整右侧间距
    // bottom: "15%", // 增加底部间距适应旋转标签
    top: 20,
    bottom: 2,
    left: 0,
    right: 3,
  },
});
</script>
