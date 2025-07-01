<template>
  <Card :title="props.title" :svgName="props.svgName" @click="handleRefresh">
    <ECharts :options="defaultOptions" :force-rerender="forceRerenderFlag"/>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import Card from "@/components/Card/index.vue";
import ECharts from "@/components/ECharts.vue";

const forceRerenderFlag = ref(false);
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
// 定义组件可以发射的事件类型
const emit = defineEmits(["refresh"]);
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

// 定义一个处理刷新事件的函数
const handleRefresh = (title: string) => {
  // 触发强制重绘
  forceRerenderFlag.value = true;

  // 重置标志，以便下次点击仍能触发
  nextTick(() => {
    forceRerenderFlag.value = false;
  });
  // 向上传递事件
  emit("refresh", title);
};

// 定义饼图数据项类型
type PieDataItem = {
  name: string;
  value: number;
};

</script>

<style scoped lang="scss"></style>
