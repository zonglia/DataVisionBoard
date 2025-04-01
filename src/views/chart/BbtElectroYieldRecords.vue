<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 7rem;" />
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
  align: ["left"],
  rowNum: [10],
  headerBGC: ["transparent"],
  evenRowBGC: ["transparent"],
  oddRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.15rem;
    background-color: transparent !important;
    > div {
      width: 13.5% !important;
    }
    > :nth-child(1) {
      width: 5.5% !important;
    }
    > :nth-child(5) {
    }
    .header-item {
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
      > div {
        width: 13.5% !important;
      }
      > :nth-child(1) {
        width: 5.5% !important;
      }
      .ceil {
        padding: 0;
      }
    }
  }
}
</style>
