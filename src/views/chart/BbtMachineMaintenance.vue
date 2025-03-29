<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 4.19rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["设备名称", "保养频率", "本次保养时间", "下次保养时间"],
  data: [
    ["？针测试机", "1次/月", "9/5", "10/5"],
    ["？针测试机", "1次/月", "9/5", "10/5"],
    ["？针测试机", "1次/月", "9/5", "10/5"],
    ["？针测试机", "1次/月", "9/5", "10/5"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [4],
  //   headerBGC: ["transparent"],
  //   oddRowBGC: ["transparent"],
});
</script>
<style scoped lang="scss">
:deep(.dv-scroll-board) {
  font-size: 0.2rem;
  .header {
    :nth-child(4) {
      font-size: 0.21rem;
    }
      :nth-child(5) {
      font-size: 0.21rem;
    }
    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
