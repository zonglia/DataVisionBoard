<template>
  <Card :title="props.title" :svgName="props.svgName">
    <ECharts :options="defaultOptions" />
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";
import type { PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "总报废",
  },
  svgName: {
    type: String,
    default: "scrap",
  },

  categories: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },
  targetRate: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },

  scrapRates: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => [],
  },

  seriesData: {
    // 新增动态series数据prop
    type: Array as PropType<
      {
        name: string;

        value: number[];
        label?: { show: boolean };
      }[]
    >,
    required: true,
    default: () => [
      { name: "", value: [], label: { show: true } }, // 默认第一个系列
      { name: "", value: [], label: { show: true } }, // 默认第二个系列
    ],
  },
});

const defaultOptions = computed(() => {
  const safeCategories =
    props.categories.length > 0 ? props.categories : ["暂无数据"];

  // 计算所有数据点的最小值
  const allValues = props.seriesData.flatMap((series) => series.value);
  const minValue = allValues.length > 0 ? Math.min(...allValues) : 0;
  const maxValue = allValues.length > 0 ? Math.max(...allValues) : 1;
  // 计算最接近的10的整数倍
  const calculateMin = (value: number) => {
    return Math.floor(value / 10) * 10;
  };
// 智能计算最大值（处理三种情况）
const calculateSmartMax = (value: number) => {
  if (value < 1) {
    // 情况1：小于1时，取0.1的整数倍（如0.28→0.3）
    return Math.ceil(value * 10) / 10;
  } else if (value < 10) {
    // 情况2：1-10之间时，取1的整数倍（如7.8→8）
    return Math.ceil(value);
  } else {
    // 情况3：大于10时，固定取100
    return 100;
  }
};

  const yAxisMin = allValues.length > 0 ? calculateMin(minValue) : 0;
  const yAxisMax = calculateSmartMax(maxValue);

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },

    legend: {
      data: props.seriesData.map((s) => s.name),
      top: 0,
      right: 0,
      textStyle: {
        color: "#fff",
      },
    },

    xAxis: {
      type: "category",
      data: safeCategories,
      axisLabel: { rotate: 45, color: "#fff", fontSize: 8 },
    },

    yAxis: {
      type: "value",
      position: "left",
      axisLabel: { formatter: "{value} %", color: "#fff", fontSize: 10 },
      min: yAxisMin,
      max: yAxisMax,
      axisLine: { show: true },
      splitLine: { show: false }, // 隐藏Y轴网格线
    },

    series: [
      {
        name: props.seriesData[0].name,
        type: "line",
        smooth: true,
        data: props.seriesData[0].value,
        itemStyle: { color: "#ff7f50" },
        label: {
          show: props.seriesData[0].label?.show ?? true, // undefined时默认为true
          position: "top",
          formatter: "{c}%",
          color: "#fff",
          fontSize: 10,
        },
      },
      {
        name: props.seriesData[1].name,
        type: "line",
        smooth: true,
        data: props.seriesData[1].value,
        itemStyle: { color: "#6495ed" },

        label: {
          show: props.seriesData[1].label?.show ?? true, // undefined时默认为true
          position: "top",
          formatter: "{c}%",
          color: "#fff",
          fontSize: 10,
        },
      },
    ],
    grid: {
      containLabel: true,
      left: 0,
      right: 2,
      bottom: 3,
      top: 40,
    },
  };
});
</script>

<style scoped lang="scss"></style>
