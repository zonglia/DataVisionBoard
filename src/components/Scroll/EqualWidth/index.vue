<template>
  <Card
    :title="props.title"
    :svgName="props.svgName"
    :titleFontSize="props.titleFontSize"
    :iconSize="props.iconSize"
    @refresh="handleRefresh"
  >
    <dv-scroll-board :config="config" />
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/Card/index.vue";

const emit = defineEmits(["refresh"]);
const props = defineProps({
  title: {
    type: String,
    default: "WIP",
  },
  svgName: {
    type: String,
    default: "wip",
  },
  titleFontSize: {
    type: String,
    default: "1rem",
  },
  iconSize: {
    type: String,
    default: "1rem",
  },
  // 动态表头数据
  header: {
    type: Array as () => string[],
    required: true,
  },
  // 动态表格数据
  tableData: {
    type: Array as () => (string | number)[][],
    required: true,
  },
  // 标题字体大小参数
  headerFontSize: {
    type: Number,
    default: 0.6,
  },
  rowNum: {
    type: Number,
    default: 4,
    validator: (value: number) => value > 0, // 确保是正整数
  },
});

// 根据行数计算背景色配置
const rowBgConfig = computed(() => {
  // 获取实际数据行数
  const dataRowCount = props.tableData.length;

  return {
    evenRowBGC: dataRowCount % 2 === 1 ? ["transparent"] : ["#026CCA80"],
    oddRowBGC: dataRowCount % 2 === 0 ? ["transparent"] : ["#026CCA80"],
  };
});

const config = computed(() => ({
  header: props.header,
  data: props.tableData,
  align: ["left"],
  rowNum: props.rowNum,
  headerBGC: ["transparent"],
  ...rowBgConfig.value,
}));

const handleRefresh = (title: string) => {
  console.log("[WIP] 收到title:", title);

  // 向上传递事件
  emit("refresh", title);
};
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: calc(v-bind("props.headerFontSize") * 1rem);
    background-color: transparent !important;

    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.6rem;
      border-radius: 0.1rem;

      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
