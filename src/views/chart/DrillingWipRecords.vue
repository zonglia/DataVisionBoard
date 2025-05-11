<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["型号", "钻孔", "成型"],
  data: [
    ["01S71041G", "1740", "1520"],
    ["02S73008A", "0", "0"],
    ["02S73009A", "0", "0"],
    ["01S73001A", "0", "0"],
  ],
  align: ["left"],
  rowNum: [4],
  headerBGC: ["transparent"],
  evenRowBGC: ["transparent"],
  oddRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.2rem;
    background-color: transparent !important;

    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
      border-radius: 0.1rem;
    
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
