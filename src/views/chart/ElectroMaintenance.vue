<template>
  <div demo-bg>
    <dv-scroll-board :config="config" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["设备名称", "保养频率", "本次保养时间", "下次保养时间", "备注"],
  data: [
    ["日蚀线1#", "1次/周", "2025/5/6", "2025/5/13", ""],
    ["日蚀线2#", "/", "/", "/", "调试"],
    ["VCP线1#", "1次/周", "2025/5/7", "2025/5/14", ""],
    ["VCP线2#", "/", "/", "/", "调试"],
    ["电镀后处理", "1次/周", "2025/5/8", "2025/5/15", ""],
  ],
  index: true,
  align: ["left"],
  rowNum: [3],
  headerBGC: ["transparent"],
  oddRowBGC: ["#026CCA80"],
  evenRowBGC: ["transparent"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.16rem;
    background-color: transparent !important;
    > div {
      width: 18.75% !important;
    }
    > :nth-child(1) {
      width: 10% !important;
    }
    > :nth-child(3) {
      width: 15% !important;
    }
    .header-item {
      text-align: center;
      padding: 0;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.16rem;
      border-radius: 0.1rem;
      > div {
        width: 18.75% !important;
      }
      > :nth-child(1) {
        width: 10% !important;
      }
      > :nth-child(3) {
        width: 15% !important;
      }
      > :nth-child(4) {
        color: yellow;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
