<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 5rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["车间", "标准温湿度", "实际温度", "实际湿度"],
  data: [
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
    ["防焊丝印房", "22℃±2℃ 50%±10%RH", "23.6℃", "52.8%"],
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
    font-size: 0.25rem;
    padding: 0;
    background-color: transparent !important;
    > div {
      width: 22.5% !important;
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
      > div {
        font-size: 0.2rem;
        width: 22.5% !important;
      }
      > :nth-child(1) {
        width: 10% !important;
      }
      > :nth-child(3) {
        font-size: 0.15rem;
      }
      .ceil {
        text-align: center;
        padding: 0;
      }
    }
  }
}
</style>
