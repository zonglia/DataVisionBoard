<template>
  <div demo-bg>
    <dv-scroll-board :config="config"  />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["日期", "料号", "SO号", "数量", "一次良率", "最终良率"],
  data: [
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
    ["3/2", "01S71041", "S50004", "306", "81.4%", "97.1%"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [6],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    padding: 0;
    font-size: 0.2rem;
    background-color: transparent !important;
    > div {
      width: 18.5% !important;
    }
    > :nth-child(1) {
      width: 10% !important;
    }
    > div:nth-child(4) {
      width: 16% !important;
    }
    > :nth-child(5) {
      font-size: 0.16rem;
    }
    > :nth-child(6) {
      font-size: 0.16rem;
    }
    .header-item {
      // text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .rows {
    padding: 0;
    .row-item {
      padding: 0;
      font-size: 0.14rem;
      > div {
        width: 18.5% !important;
      }
      > :nth-child(1) {
        width: 10% !important;
      }
      > :nth-child(3) {
        // font-size: 0.15rem;
      }
      > div:nth-child(4) {
        width: 16% !important;
      }
      > div:nth-child(5) {
        font-size: 0.14rem;
      }
      > div:nth-child(6) {
        font-size: 0.14rem;
      }
      .ceil {
        padding: 0;
        // text-align: center;
      }
    }
  }
}
</style>
