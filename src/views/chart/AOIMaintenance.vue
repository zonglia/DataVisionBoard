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
    
    ["AOI", "AOI+VRS3#", "1次/周", "2025年3月27日", "2025年4月3日"],
    ["菲林房", "光绘机1#", "1次/周", "2025年3月3日", "2025年3月10日"],
    ["菲林房", "光绘机2#", "1次/周", "2025年3月4日", "2025年3月11日"],
    ["菲林房", "底片检查机", "1次/周", "2025年3月5日", "2025年3月12日"],
    ["防焊", "前处理1#", "1次/周", "2025年3月6日", "2025年3月13日"],
    ["防焊", "前处理2#", "1次/周", "2025年3月7日", "2025年3月14日"],
    ["防焊", "前处理3#", "1次/周", "2025年3月8日", "2025年3月15日"],
   
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [7],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.15rem;
    background-color: transparent !important;
    > :nth-child(5) {
    }
    .header-item {
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.14rem;
      > :nth-child(3) {
        font-size: 0.09rem;
      }
      > :nth-child(5) {
        font-size: 0.08rem;
      }
      > :nth-child(6) {
        font-size: 0.08rem;
      }
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
