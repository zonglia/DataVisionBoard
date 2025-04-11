<template>
  <ECharts :options="chartOptions" />
</template>

<script setup lang="ts">
import ECharts from "@/components/ECharts.vue";
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";

const chartOptions = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
  },

  xAxis: {
    type: "value", // 横轴改为数值轴
    name: "单位：PML",
    min: 0,
    max: 25,
    // minInterval: 100,
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
      data: [20, 20],
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
    top: "10%",
    bottom: 3,
    left: "3",
    right: "18",
  },
});


// 定义向父组件发送事件的 emit
const emit = defineEmits(["refresh-time-updated"]);

// 定时器ID
let timer: number | null = null;

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    const lastRefreshTime = `${now.getFullYear()}/${
      now.getMonth() + 1
    }/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    emit("refresh-time-updated", lastRefreshTime);

    console.log("hello world");
  };
  // 立即执行一次确保初始值
  updateTime();

  // 设置定时器，每隔2秒执行一次
  timer = setInterval(updateTime, 200000);
});

onUnmounted(() => {
  // 组件卸载时清除定时器
  if (timer) {
    clearInterval(timer);
  }
});
</script>
