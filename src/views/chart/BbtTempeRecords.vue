<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 4.19rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["车间", "标准温度", "实际温度", "实际湿度"],
  data: [
    ["电测", "23℃±3℃40%±20%", "23℃", "52%"],
    ["电测", "23℃±3℃40%±20%", "23℃", "52%"],
    ["电测", "23℃±3℃40%±20%", "23℃", "52%"],
    ["成品仓", "23℃±3℃40%±20%", "23℃", "52%"],
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
    .header-item {
      text-align: center;
    }
  }
  .rows {
    .row-item {
      :nth-child(3) {
        padding: 0;
        font-size: 0.15rem;
      }
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
