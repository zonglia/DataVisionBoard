<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["型号", "BBT", "OSP", "AVI", "包装"],
  data: [
    ["01S71041G", "1095", "608", "299", "0"],
    ["01S71047A", "6", "0", "0", "0"],
  ],
  align: ["left"],
  rowNum: [2],
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
    > div {
      width: 18.75% !important;
    }
    > :nth-child(1) {
      width: 25% !important;
    }

    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
      border-radius: 0.1rem;
      > div {
        width: 18.75% !important;
      }
      > :nth-child(1) {
        width: 25% !important;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
