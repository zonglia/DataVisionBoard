<template>
  <div ref="chart" :style="{ width, height }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  theme: {
    type: [String, Object],
    default: "light",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  forceRerender: { // 用于强制重绘
    type: Boolean,
    default: false,
  }
});

const chart = ref(null);
let chartInstance = null;
let resizeObserver = null; // 用于监听父容器尺寸变化

const initChart = () => {
  if (!chart.value) return;
  chartInstance = echarts.init(chart.value, props.theme);
  chartInstance.setOption(props.options);
};

const updateChart = () => {
  if (!chartInstance) return;
  chartInstance.setOption(props.options, true);
};

const handleResize = () => {
  chartInstance?.resize();
};

const autoResizeHandler = () => {
  if (props.autoResize && chart.value) {
    // 监听窗口变化
    window.addEventListener("resize", handleResize);
    // 监听父容器变化
    const parentElement = chart.value.parentElement;
    if (parentElement) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(parentElement);
    }
  }
};

// 强制重绘方法
const forceRerender = () => {
  if (!chartInstance) return;
  
  // 保存当前选项
  const currentOption = chartInstance.getOption();
  
  // 先清空选项
  chartInstance.setOption({}, true);
  
  // 立即重新设置选项（这会触发动画）
  setTimeout(() => {
    chartInstance.setOption(currentOption, true);
  }, 0);
};

onMounted(() => {
  initChart();
  autoResizeHandler();
});

onBeforeUnmount(() => {
  if (chartInstance) {
    window.removeEventListener("resize", handleResize);
    resizeObserver?.disconnect(); // 清理监听器
    chartInstance.dispose();
    chartInstance = null;
  }
});

watch(
  () => props.options,
  () => updateChart(),
  { deep: true }
);

watch(
  () => props.theme,
  (newTheme) => {
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = echarts.init(chart.value, newTheme); // 修复变量名
      chartInstance.setOption(props.options);
    }
  }
);

// 监听 forceRerender 变化
watch(
  () => props.forceRerender,
  (newVal) => {
    if (newVal) {
      forceRerender();
    }
  }
);
</script>