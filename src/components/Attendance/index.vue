<template>
  <Card :title="props.title" :svgName="props.svgName" @refresh="handleRefresh">
    <ECharts :options="defaultOptions" />
  </Card>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";
import * as echarts from "echarts";

const emit = defineEmits(["refresh"]);
const props = defineProps({
  title: {
    type: String,
    default: "人员出勤",
  },
  svgName: {
    type: String,
    default: "users",
  },
  attendance: {
    type: Number,
    default: 0, // 默认出勤人数
  },
  totalStaff: {
    type: Number,
    default: 0, // 默认在职人数
  },
});

const defaultOptions = computed(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  xAxis: {
    type: "value", // 横轴改为数值轴
    min: 0,
    max: Math.ceil(props.totalStaff * 1.2), // 向上取整
    axisLabel: { color: "#fff", fontSize: 10 },
    axisLine: { show: true },
    splitLine: { show: false }, // 隐藏X轴网格线
  },

  yAxis: {
    type: "category", // 纵轴改为类目轴
    data: ["出勤人数", "在职人数"],
    axisLabel: {
      color: "#fff",
      fontSize: 8,
    },
  },

  series: [
    {
      name: "人员出勤",
      type: "bar", // 柱状图（横向）
      data: [`${props.attendance}`, `${props.totalStaff}`],
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
    top: 5,
    bottom: 5,
    left: 5,
    right: 10,
  },
}));

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

<style scoped lang="scss"></style>
