<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 3.8rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: [
    "工序名称",
    "生产型号",
    "SO号",
    "板类型",
    "生产类型",
    "停留(H)",
    "结存数",
    "单位",
    "预计入库日期",
    "收板日期",
  ],
  data: [
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
    [
      "外层板电",
      "02Y86072A2",
      "S4Q827",
      "通孔板",
      " 样板",
      " 3960.1",
      "8",
      "P",
      " 2024-10-15",
      "10 15:12",
    ],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [5],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
});
</script>
<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    background-color: transparent !important;
    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
