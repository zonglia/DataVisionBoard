<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="height: 4.5rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["线体", "异常报警", "报警时间"],
  data: [
    ["一次棕化线1", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线2", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线3", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线4", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线5", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线6", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线7", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线8", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线9", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线10", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线11", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线12", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线13", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
    ["一次棕化线14", "棕化添加缸3液位过低请检查", "2025/3/24 19:36:43"],
  ],
  columnWidth: [50],
  align: ["center"],
  rowNum: [6],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
});
</script>
<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    font-size: 0.25rem;
    padding: 0;
    > div {
      width: 30% !important;
    }

    > :nth-child(2) {
      width: 40% !important;
    }
    background-color: transparent !important;
    .header-item {
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.15rem;
      > div {
        width: 30% !important;
        padding: 0;
      }
      > :nth-child(2) {
        width: 40% !important;
      }

      .ceil {
        padding: 0;
      }
    }
  }
}
</style>
