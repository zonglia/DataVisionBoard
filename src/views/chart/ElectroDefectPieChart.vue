<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  //   title: {
  //     text: "BBT 不良分析",
  //     left: "center",
  //     textStyle: {
  //       // 标题字体设置
  //       fontSize: 10,
  //       fontWeight: "bold",
  //     },
  //   },
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
      color: "#666",
      fontSize: 8, // 图例文字大小
    },
    itemGap: 8, // 恢复图例间距
    itemHeight: 7, // 图例标记高度
    itemWidth: 7, // 图例标记高度
  },
  series: [
    {
      type: "pie",
      radius: "70%",
      center: ["60%", "50%"], // 30%表示水平方向左移（默认50%居中）50%表示垂直居中
      data: [

   

        { value: 10.02, name: "电镀磨刷堵孔报废" },
        { value: 8.75, name: "电镀铜粒" },
        { value: 4.33, name: "电镀板面污染" },
        { value: 3.68, name: "电镀镀厚" },
        { value: 2.99, name: "电镀镀层粗糙" },
      ],
      // 饼图标签样式
      label: {
        show: true, // 关闭默认标签显示
        fontSize: 10,
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
