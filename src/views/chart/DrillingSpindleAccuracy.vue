<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["日期", "机台号", "SP1", "SP2", "SP3", "SP4", "SP5", "SP6", "备注"],
  data: [
    ["4/1", "1#", "7", "6", "4", "5", "", "", "<20um"],
    ["4/2", "2#", "6", "7", "5", "6", "", "", "<20um"],
    ["4/3", "3#", "3", "7", "4", "6", "", "", "<20um"],
    ["4/4", "4#", "5", "8", "9", "6", "", "", "<20um"],
    ["4/5", "5#", "8", "5", "7", "5", "", "", "<20um"],
    ["4/6", "6#", "9", "9", "5", "6", "", "", "<20um"],
    ["4/7", "7#", "9", "9", "4", "8", "", "", "<20um"],
    ["4/8", "8#", "8", "9", "5", "5", "", "", "<20um"],
    ["4/9", "9#", "9", "8", "5", "8", "", "", "<20um"],
    ["4/10", "10#", "6", "5", "8", "5", "", "", "<20um"],
    ["4/11", "11#", "5", "7", "9", "6", "", "", "<20um"],

    ["4/2", "1#", "6", "6", "7", "6", "6", "7", "<15um"],
    ["4/3", "2#", "9", "5", "6", "6", "4", "9", "<15um"],
    ["4/4", "3#", "8", "9", "7", "8", "9", "7", "<15um"],
    ["4/5", "4#", "6", "7", "5", "5", "7", "9", "<15um"],
    ["4/6", "5#", "9", "8", "9", "6", "9", "5", "<15um"],
    ["4/7", "6#", "9", "8", "7", "7", "4", "9", "<15um"],
    ["4/8", "7#", "6", "6", "7", "9", "8", "8", "<15um"],
    ["4/9", "8#", "8", "5", "9", "7", "8", "5", "<15um"],
    ["4/10", "9#", "9", "4", "8", "9", "4", "5", "<15um"],
    ["4/11", "10#", "8", "8", "7", "4", "7", "7", "<15um"],
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
    // > div {
    //   width: 12.1666% !important;
    // }
    // > :nth-child(1) {
    //   width: 7% !important;
    //   background-color: tomato;
    // }
    // > :nth-child(2) {
    //   width: 10% !important;
    //   background-color: yellow;
    // }
    //  > :nth-child(9) {
    //   width: 10% !important;
    //   background-color: red;
    // }
    .header-item {
      text-align: center;
      padding: 0;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.18rem;
      border-radius: 0.1rem;
      > div:nth-child(9) {
        font-size: 0.17rem;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
