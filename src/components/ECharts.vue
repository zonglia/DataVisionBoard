<template>
  <div ref="chart" :style="{ width, height }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    // 核心配置
    type: Object,
    required: true,
  },
  theme: {
    // 主题配置
    type: [String, Object],
    default: "light",
  },
  width: {
    // 样式解耦
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "400px",
  },
  autoResize: {
    // 响应式配置
    type: Boolean,
    default: true,
  },
});

const chart = ref(null);
let chartInstance = null;

// 初始化图表
const initChart = () => {
  if (!chart.value) return;

  chartInstance = echarts.init(chart.value, props.theme);
  chartInstance.setOption(props.options);
};

// 更新图表配置
const updateChart = () => {
  if (!chartInstance) return;
  chartInstance.setOption(props.options, true);
};

// 窗口resize处理
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};

// 自动resize处理
const autoResizeHandler = () => {
  if (props.autoResize) {
    window.addEventListener("resize", handleResize);
  }
};

// 生命周期管理
onMounted(() => {
  initChart();
  autoResizeHandler();
});
// 在组件卸载前执行清理操作
onBeforeUnmount(() => {
  if (chartInstance) {
    window.removeEventListener("resize", handleResize); // 移除窗口 resize 事件监听器
    chartInstance.dispose(); // 销毁 ECharts 实例以释放资源
    chartInstance = null; // 将实例引用置空，帮助垃圾回收
  }
});

// 响应式处理
watch(
  () => props.options, // 监听源：通过函数返回 props.options
  () => {
    updateChart(); // 当 options 发生变化时，重新渲染图表
  },
  { deep: true } // 开启深度监听，确保对象内部属性变化也能触发回调
);

watch(
  () => props.theme, // 监听源：通过函数返回 props.theme
  (newTheme) => {
    if (chartInstance) {
      chartInstance.dispose(); // 销毁旧图表实例释放资源
      chartInstance = echarts.init(chartRef.value, newTheme); // 使用新主题初始化图表实例
      chartInstance.setOption(props.options); // 重新加载图表配置
    }
  }
);
</script>
