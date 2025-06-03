<template>
  <Card :title="props.title" :svgName="props.svgName">
    <ECharts :options="chartOptions" />
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";
import * as echarts from "echarts";
import type { PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "电测",
  },
  svgName: {
    type: String,
    default: "production",
  },
  data: {
    type: Array as PropType<
      Array<{
        date: string;
        total: number;
        goodBoards: number;
      }>
    >,
    required: true,
  },
});

// 处理数据：按日期分组计算总和和良率
const processedData = computed(() => {
  const dateMap = new Map<string, { total: number; good: number }>();

  props.data.forEach((item) => {
    const dateStr = new Date(item.date).toLocaleDateString("zh-CN", {
      month: "numeric",
      day: "numeric",
    });

    if (!dateMap.has(dateStr)) {
      dateMap.set(dateStr, { total: 0, good: 0 });
    }

    const current = dateMap.get(dateStr)!;
    current.total += item.total;
    current.good += item.goodBoards;
  });

  return Array.from(dateMap.entries())
    .map(([date, values]) => ({
      date,
      total: values.total,
      yieldRate:
        values.total > 0 ? ((values.good / values.total) * 100).toFixed(2) : 0,
    }))
    .sort((a, b) => {
      // 按日期排序
      const [aMonth, aDay] = a.date.split("/").map(Number);
      const [bMonth, bDay] = b.date.split("/").map(Number);
      return aMonth - bMonth || aDay - bDay;
    });
});

const chartOptions = computed(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
    formatter: (params: any[]) => {
      const [bar, line] = params;
      return `
          <div style="font-weight:bold">${bar.axisValue}</div>
          ${bar.marker} 总产量: <strong>${bar.value}</strong> PNL<br/>
          ${line.marker} 良率: <strong>${line.value}%</strong>
        `;
    },
  },
  legend: {
    data: ["总产量", "良率"],
    textStyle: {
      color: "#666",
      fontSize: 12,
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: processedData.value.map((item) => item.date),
    axisLine: {
      lineStyle: {
        color: "#999",
      },
    },
    axisLabel: {
      interval: 0, // 强制显示所有标签
    },
  },
  yAxis: [
    {
      type: "value",
      name: "总产量（PNL）",
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "良率（%）",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value}%",
      },
    },
  ],
  series: [
    {
      name: "总产量",
      type: "bar",
      barWidth: "40%",
      data: processedData.value.map((item) => item.total),
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
      label: {
        show: true,
        position: "inside",
        fontSize: 10,
        formatter: (params: any) => (params.value > 0 ? params.value : ""),
      },
    },
    {
      name: "良率",
      type: "line",
      yAxisIndex: 1,
      data: processedData.value.map((item) => item.yieldRate),
      itemStyle: {
        color: "#EE6666",
      },
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        width: 3,
      },
      label: {
        show: true,
        position: "top",
        fontSize: 10,
        formatter: (params: any) => `${params.value}%`,
      },
    },
  ],
}));
</script>

<style scoped lang="scss"></style>
