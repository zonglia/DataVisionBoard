<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref } from "vue";

const chartOptions = ref({
  tooltip: {
    trigger: "item",
    textStyle: {
      // 提示框字体
      fontSize: 14,
    },
  },
  legend: {
    orient: "vertical",
    top: 10,
    left: 0,
    textStyle: {
      color: "#666",
      fontSize: 8, // 图例文字大小
    },
    itemGap: 10, // 恢复图例间距
    itemHeight: 8, // 图例标记高度
    itemWidth: 8, // 图例标记高度
  },
  series: [
    {
      type: "pie",
      radius: "70%",
      center: ["60%", "50%"], // 30%表示水平方向左移（默认50%居中）50%表示垂直居中
      data: [
        { value: 7.6, name: "偏孔" },
        { value: 0.256, name: "漏孔" },
        { value: 2, name: "外力损伤" },
        { value: 0.144, name: "披锋" },
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
