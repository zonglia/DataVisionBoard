<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["型号", "外层(PNL)", "AOI(PNL)"],
  data: [
    ["01S71041G", "11070", "612"],
    ["02S73008A", "156", "104"],
    ["02S73009A", "156", "156"],
    ["01S73001A", "156", "156"],
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
