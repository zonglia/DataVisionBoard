<template>
  <Card :title="props.title" :svgName="props.svgName">
    <ECharts :options="defaultOptions" />
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";

const props = defineProps({
  title: {
    type: String,
    default: "饼状图",
  },
  svgName: {
    type: String,
    default: "scrap",
  },
  // 动态饼图数据
  pieData: {
    type: Array as () => PieDataItem[],
    required: true,
  },
});

const defaultOptions = computed(() => {
  return {
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
        fontSize: 10, // 图例文字大小
      },
      itemGap: 10, // 恢复图例间距
      itemHeight: 10, // 图例标记高度
      itemWidth: 15, // 图例标记宽度
    },
    series: [
      {
        type: "pie",
        radius: "90%",
        center: ["60%", "50%"], // 30%表示水平方向左移（默认50%居中）50%表示垂直居中
        data: props.pieData,
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
  };
});

// 定义饼图数据项类型
type PieDataItem = {
  value: number;
  name: string;
};
</script>

<style scoped lang="scss"></style>
