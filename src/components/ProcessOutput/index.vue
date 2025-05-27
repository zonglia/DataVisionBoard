<template>
  <!-- 透传 Card 的 refresh 事件 -->
  <Card :title="props.title" :svgName="props.svgName" @refresh="handleRefresh">
    <div class="horizontal-charts">
      <ECharts :options="DailyOptions" :force-rerender="forceRerenderFlag" />
      <ECharts :options="MonthlyOptions" :force-rerender="forceRerenderFlag" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed, defineEmits, ref, nextTick } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";
import type { PropType } from "vue";
import * as echarts from "echarts";
const emit = defineEmits(["refresh"]);
const props = defineProps({
  title: {
    type: String,
    default: "工序出数",
  },
  svgName: {
    type: String,
    default: "output",
  },
  dailyCategory: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },
  monthlyCategory: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },
  dailyOutput: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },
  monthlyOutput: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => [], // 即使required也提供空数组默认值
  },
});

const DailyOptions = computed(() => {
  return {
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

    xAxis: {
      type: "category",
      data: props.dailyCategory,
      axisLabel: {
        color: "#fff", // 字体颜色
        fontSize: 8, // 字体大小（单位：像素）
      },
    },

    yAxis: [
      {
        type: "value",
        name: "单位：PNL",
        position: "left",
        nameTextStyle: {
          color: "#fff", // 确保颜色与背景对比明显
          fontSize: 8, // 调整字体大小
          padding: [0, 0, 0, 10], // 调整位置（右下左上顺序）
        },
        min: 0,
        max: dailyMaxValue.value,
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
        data: props.dailyOutput,
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
      top: 30,
      bottom: 3,
      left: 3,
      right: 2,
    },
  };
});

const MonthlyOptions = computed(() => ({
  title: {
    text: "月累计产出",
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

  xAxis: {
    type: "value", // 横轴改为数值轴
    name: "单位：PNL",
    min: 0,
    max: monthlyMaxValue.value,

    nameTextStyle: {
      color: "#fff", // 确保颜色与背景对比明显
      fontSize: 8, // 调整字体大小
      padding: [0, 0, 0, -30], // 调整位置（右下左上顺序）
    },
    axisLabel: { color: "#fff", fontSize: 10 },
    axisLine: { show: true },
    splitLine: { show: false }, // 隐藏X轴网格线
  },

  yAxis: {
    type: "category", // 纵轴改为类目轴
    data: props.monthlyCategory,
    axisLabel: {
      color: "#fff",
      fontSize: 8,
    },
  },

  series: [
    {
      name: "月累计产出",
      type: "bar", // 柱状图（横向）
      data: props.monthlyOutput,
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
    top: 10,
    bottom: 0,
    left: 3,
    right: 25,
  },
}));
const dailyMaxValue = computed(() => calculateMaxValue(props.dailyOutput));
const monthlyMaxValue = computed(() => calculateMaxValue(props.monthlyOutput));

// 通用计算最大值方法
const calculateMaxValue = (
  data: number[],
  defaultMax = 5000,
  multiplier = 1.2,
  roundTo = 100
) => {
  if (data.length === 0) return defaultMax;
  const max = Math.max(...data);
  return Math.ceil((max * multiplier) / roundTo) * roundTo;
};

const forceRerenderFlag = ref(false);

const handleRefresh = (title: string) => {
  console.log("[ProcessOutPut] 收到title:", title);

  // 触发强制重绘
  forceRerenderFlag.value = true;

  // 重置标志，以便下次点击仍能触发
  nextTick(() => {
    forceRerenderFlag.value = false;
  });

  // 向上传递事件
  emit("refresh", title);
};
</script>

<style scoped lang="scss">
.horizontal-charts {
  display: flex; /* 启用flex布局 */
  height: 100%; /* 继承父容器高度 */
  gap: 0.1rem; /* 图表之间的间距 */
}
</style>
