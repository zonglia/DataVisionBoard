<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 5rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["工序", "设备名称", "保养频率", "本次保养时间", "下次保养时间"],
  data: [
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机2#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
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
    font-size: 0.15rem;
    padding: 0;
    background-color: transparent !important;
    > div {
      width: 18% !important;
    }
    > :nth-child(1) {
      width: 10% !important;
    }
    > :nth-child(4) {
      font-size: 0.1rem;
    }
    > :nth-child(5) {
      font-size: 0.11rem;
    }
    > :nth-child(6) {
      font-size: 0.11rem;
    }
    .header-item {
      //   text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .rows {
    .row-item {
      > div {
        font-size: 0.12rem;
        width: 18% !important;
      }
      > :nth-child(1) {
        font-size: 0.08rem;
        width: 10% !important;
      }

      > :nth-child(2) {
        font-size: 0.12rem;
      }
      .ceil {
        padding: 0;
      }
    }
  }
}
</style>
