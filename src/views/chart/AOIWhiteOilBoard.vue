<template>
  <div demo-bg>
    <dv-scroll-board
      :config="config"
      style="height: 4.84rem;"
    />
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
  white-space: normal; /* 允许换行 */
  overflow-wrap: break-word; /* 优先保持单词完整 */
  .header {
    font-size: 0.13rem;
    background-color: transparent !important;
    > div {
      width: 15% !important;
    }
    > :nth-child(1) {
      width: 10% !important;
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
      font-size: 0.13rem;
      > div {
        width: 15% !important;
      }
      > :nth-child(1) {
        font-size: 0.12rem;
        width: 10% !important;
      }
      > :nth-child(3) {
        font-size: 0.1rem;
      
      }
      .ceil {
      }
    }
  }
}
</style>
