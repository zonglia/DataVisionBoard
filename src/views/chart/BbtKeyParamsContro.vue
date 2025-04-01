<template>
  <div demo-bg><dv-scroll-board :config="config" /></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["工序", "项目", "管控范围", "实际参数"],
  data: [
    ["电测", "车间温度", "23±3℃", "23.5℃"],
    ["电测", "车间湿度", "50±10%", "46%"],
    ["电测", "测试电压", "250V", "250V"],
    ["电测", "开路电阻", "20Ω", "20Ω"],
    ["电测", "绝缘电阻", "20MΩ", "20MΩ"],
    ["OSP", "线速", "2.5-3.5m/min", "3.0m/min"],
    ["OSP", "双氧水浓度", "13-27g/L", "24.29g/L"],
    ["OSP", "硫酸浓度", "43-57g/L", "52g/L"],
    ["OSP", "铜离子", "<10g/L", "0.95g/L"],
    ["OSP", "微蚀量", "43-77U”", "68U”"],
    ["OSP", "膜厚", "0.2-0.35um", "0.35um"],
    ["包装", "加热时间", "15-25S", "20S"],
    ["包装", "抽真空时间", "12-20S", "15S"],
    ["包装", "加热温度", "250±15℃", "240℃"],
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
    font-size: 0.15rem;
    background-color: transparent !important;
    > div {
      width: 28% !important;
    }
    > :nth-child(1) {
      width: 16% !important;
    }
    .header-item {
        text-align: center;
    }
  }

  .rows {
    .row-item {
      padding: 0;
      font-size: 0.2rem;
       border-radius: 0.1rem;
      > div {
        width: 28% !important;
      }
      > :nth-child(1) {
        width: 16% !important;
      }
      .ceil {
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
