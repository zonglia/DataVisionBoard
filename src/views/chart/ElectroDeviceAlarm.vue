<template>
  <div demo-bg>
    <dv-scroll-board :config="config" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["线体", "异常报警", "报警时间"],
  data: [
    ["VCP1#线", "抗氧化液位过低请检查", "2025/4/6 20:19"],
    ["VCP1#线", "烘干温度异常", "2025/4/6 8:22"],
    ["除胶渣日蚀线1#", "急停按下请检查", "2025/4/6 18:39"],
    ["除胶渣日蚀线1#", "水刀洗2液位过低请检查", "2025/4/6 9:14"]
],
  columnWidth: [50],
  align: ["center"],
  rowNum: [3],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});
</script>
<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.2rem;
    background-color: transparent !important;
    > div {
      width: 39% !important;
    }
    > :nth-child(1) {
      width: 22% !important;
 
    }
    > :nth-child(2) {
 
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
        width: 39% !important;
      }
      > :nth-child(1) {
        width: 22% !important;
  
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
