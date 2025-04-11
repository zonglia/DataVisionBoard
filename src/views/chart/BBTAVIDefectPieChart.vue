<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  // title: {
  //   text: "AVI 不良分析",
  //   left: "center",
  //   textStyle: {
  //     // 标题字体设置
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   },
  // },
  //   提示框
  tooltip: {
    trigger: "item",
    textStyle: {
      // 提示框字体
      fontSize: 14,
    },
  },
  legend: {
    orient: "vertical",
    top: 0,
    left: 0,
    textStyle: {
      color: "#fff",
      fontSize: 15, // 图例文字大小
    },
    itemGap: 10, // 恢复图例间距
    itemHeight: 12, // 图例标记高度
  },
  series: [
    {
      type: "pie",
      radius: "90%",
      center: ["50%", "50%"], // 30%表示水平方向左移（默认50%居中）50%表示垂直居中
      data: [
        { value: 10, name: "断桥" },
        { value: 6, name: "防焊异物" },
        { value: 2, name: "板面不洁" },
      ],
      // 饼图标签样式
      label: {
        show: true, // 关闭默认标签显示
        fontSize: 15,
        color: "#bfa",
        // formatter: "{b}: {d}%", // 显示名称和百分比
        formatter: "{@value}",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        label: {
          show: true, // 高亮时显示标签
          fontSize: 8,
          fontWeight: "bold",
        },
      },
    },
  ],
});
</script>
