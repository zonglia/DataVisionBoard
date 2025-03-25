<template>
  <div>
    <ECharts :options="chartOptions" height="4rem" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";
const chartOptions = ref({
  // 标题配置
  title: {
    text: "销售趋势",
    left: "center",
    textStyle: {
      color: "#333",
      fontSize: 18,
    },
  },

  // X轴配置（时间轴）
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    axisLabel: {
      rotate: 45, // 倾斜45度显示
    },
  },

  // Y轴配置
  yAxis: {
    type: "value",
    name: "销售额 (万元)",
    // 显示 x 轴轴线
    axisLine: {
      show: true,
    },
  },

  // 数据系列配置
  series: [
    {
      name: "订单量",
      type: "bar",
      data: [95, 130, 115, 60, 55, 90, 100, 150, 180, 200, 160, 140],
      yAxisIndex: 0,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
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
          ],
        },
      },
    },
  ],

  // 提示框配置
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },

  // 图例配置
  legend: {
    data: ["订单量"],
    top: 30,
  },
  // 响应式配置
  grid: {
    containLabel: true, // 是否包含坐标轴的名称和标签
    left: "3%", // 图表左侧的间距，百分比相对于容器宽度
    // right: "17%", // 图表右侧的间距，百分比相对于容器宽度
    bottom: "5%", // 图表底部的间距，百分比相对于容器高度
    // top: "15%", // 图表顶部的间距，百分比相对于容器高度
  },
});
</script>

<style lang="scss" scoped></style>
