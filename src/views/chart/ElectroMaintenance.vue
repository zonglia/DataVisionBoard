<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 4.7rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["工序", "设备名称", "保养频率", "本次保养时间", "下次保养时间"],
  data: [
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
    ["菲林房", "光绘机1#", "1次/周", "2025/3/3", "2025/3/10"],
  ],
  index: true,
  columnWidth: [50],
  align: ["left"],
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
