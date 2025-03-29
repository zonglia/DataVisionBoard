<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 5.6rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: [
    "生产日期",
    "型号",
    "投入数",
    "一次合格数",
    "一次合格率",
    "最终合格数",
    "最终合格率",
  ],
  data: [
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
    ["12/16", "02S71044G", "937", "878", "93.7%", "928", "99.0%"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [5],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {

  .header {
    font-size: 0.15rem;
    background-color: transparent !important;
    > :nth-child(5) {
    }
    .header-item {
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
