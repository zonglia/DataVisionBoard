<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="width: 100%; height: 3.7rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["线别", "保养频次", "今日保养"],
  data: [
    ["日蚀1线", "14天/次", "✅"],
    ["日蚀2线", "14天/次", "🕒"],
    ["日蚀3线", "14天/次", "✅"],
    ["日蚀4线", "14天/次", "✅"],
    ["VCP1线", "30天/次", "🕒"],
    ["VCP2线", "30天/次", "✅"],
    ["VCP3线", "30天/次", "✅"],
    ["VCP4线", "30天/次", "✅"],
    ["显影1线", "7天/次", "✅"],
    ["显影2线", "7天/次", "✅"],
    ["显影3线", "7天/次", "✅"],
    ["显影4线", "7天/次", "✅"],
    ["闪蚀1线", "30天/次", "✅"],
    ["闪蚀2线", "30天/次", "✅"],
    ["闪蚀3线", "30天/次", "✅"],
    ["闪蚀4线", "30天/次", "✅"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [5],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    background-color: transparent !important;
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
