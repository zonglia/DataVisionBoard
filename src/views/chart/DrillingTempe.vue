<template>
  <div demo-bg>
    <dv-scroll-board :config="config" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["车间", "标准温湿度", "实际温度", "实际湿度"],
  data: [
    ["线路无尘室", "22℃±2℃55%±5%RH", "22", "55%"],
    ["AOI", "23℃±3℃40%±20%RH", "22", "55%"],
  ],
  // index: true,
  // columnWidth: [50],
  align: ["center"],
  rowNum: [2],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    padding: 0;
    font-size: 0.15rem;
    background-color: transparent !important;
    background-color: blue !important;

    > div {
      padding: 0;
      width: 20% !important;
    }

    > div:nth-child(2) {
      width: 40% !important;
    }

    .header-item {
      text-align: center;
      padding: 0;
    }
  }

  .rows {
    padding: 0;
    .row-item {
      padding: 0;
      font-size: 0.14rem;
      border-radius: 0.13rem;
      > div {
        width: 20% !important;
      }

      > div:nth-child(2) {
        width: 40% !important;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
