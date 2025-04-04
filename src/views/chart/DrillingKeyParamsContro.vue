<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["工序", "过程", "设定值", "控制范围", "检查方法"],
  data: [
    ["钻孔", "AIR压力", "0.65mpa", "0.65±0.05mpa", "面盘显示"],
    ["钻孔", "AIR压力", "0.65mpa", "0.65±0.05mpa", "面盘显示"],
    ["成型", "AIR压力", "0.65mpa", "0.65±0.05mpa", "面盘显示"],
    ["成型", "AIR压力", "0.65mpa", "0.65±0.05mpa", "面盘显示"],
    ["成型", "AIR压力", "0.65mpa", "0.65±0.05mpa", "面盘显示"],
  ],
  align: ["left"],
  rowNum: [3],
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
      width: 20% !important;
    }
    > :nth-child(1) {
      width: 10% !important;
    }
    > :nth-child(4) {
      width: 30% !important;
    }
    .header-item {
      text-align: center;
      padding: 0;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
      border-radius: 0.1rem;
      > div {
        width: 20% !important;
      }
      > :nth-child(1) {
        width: 10% !important;
      }
      > :nth-child(4) {
        width: 30% !important;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
