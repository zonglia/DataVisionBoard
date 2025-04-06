<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["生产型号", "批次", "板类型", "类型", "结存数", "单位", "生产工序"],
  data: [
    ["02S73008", "F40001-A01", "通孔板", "生产", "52", "p", "日蚀"],
    ["02S73008", "F40002-A01", "通孔板", "生产", "52", "p", "日蚀"],
    ["02S73008", "F40003-A01", "通孔板", "生产", "52", "p", "日蚀"],
    ["02S73009", "F40007-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73009", "F40008-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73009", "F40009-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73008", "F40010-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73008", "F40011-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73008", "F40012-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73009", "F40016-A01", "通孔板", "生产", "52", "p", "日蚀"],
    ["02S73009", "F40017-A01", "通孔板", "生产", "52", "p", "日蚀"],
    ["02S73009", "F40018-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73008", "F40019-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73008", "F40020-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73008", "F40021-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73009", "F50007-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73009", "F50008-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73009", "F50009-A01", "通孔板", "生产", "52", "p", "外层板电"],
    ["02S73008", "S50053-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73008", "S50054-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73008", "S50055-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73009", "S50140-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73009", "S50139-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
    ["02S73009", "S50120-A01", "通孔板", "生产", "52", "p", "电镀后处理"],
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
