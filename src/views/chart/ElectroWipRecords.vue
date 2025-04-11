<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["生产型号", "批次", "板类型", "类型", "结存数", "单位", "生产工序"],
  data: [
    ["02S71035", "S50104-A01", "通孔板", "生产", "340", "p", "外层板电"],
    ["02S71037", "S50103-A01", "通孔板", "生产", "255", "p", "外层板电"],
    ["02S71035", "S50141-A01", "通孔板", "生产", "120", "p", "日蚀"],
    ["02S71035", "S50216-A01", "通孔板", "生产", "360", "p", "日蚀"],
    ["02S71037", "S50142-A01", "通孔板", "生产", "360", "p", "日蚀"],
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
    font-size: 0.2rem;
    background-color: transparent !important;
    > div {
      width: 16.8% !important;
    }
    > :nth-child(4) {
      width: 8% !important;
    }
    > :nth-child(6) {
      width: 8% !important;
      text-align: center;
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
        width: 16.8% !important;
      }
      > :nth-child(4) {
        width: 8% !important;
      }
      > :nth-child(6) {
        width: 8% !important;
        text-align: center;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
