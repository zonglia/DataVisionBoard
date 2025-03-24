<template>
  <!-- <dv-scroll-board :config="config" style="width: 100%; height: 380px" /> -->
     <dv-scroll-board :config="config" style="width: 100%; height: 5.3rem" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
const config = reactive({
  header: ["设备报警记录"],
  data: [
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸1液位过低请检查。",
    ],
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸2液位过低请检查。",
    ],
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸3液位过低请检查。",
    ],
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸4液位过低请检查。",
    ],
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸5液位过低请检查。",
    ],
    [
      "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸3液位过低请检查。",
    ],
    //    [
    //    "<span>一次棕化线</span><span>2025/3/22 17:27:24</span>\n棕化添加缸3液位过低请检查。",
    //   ],

    //  ["芯板除胶渣连日蚀线A\n急停按下请检查。"],
    //  ["芯板除胶渣连日蚀线A\n除胶渣段液位过高请调整添加参数。"],
    //  ["一次棕化线\n棕化添加缸1液位过低请检查。"],
    //  ["芯板除胶渣连日蚀线A\n水刀洗2液位过低请检查。"],
  ],
  align: ["center"],
});
</script>

<style scoped lang="scss">
:deep(.header-item) {
  background-color: red;
  width: 100% !important;
  text-align: center;
  // line-height: .45rem !important ;
  font-size: .25rem;
}
:deep(.rows) {
  .row-item {
    // 69.6px
    height: 1rem !important;
    div {
      // 34.8px
      line-height: .435rem !important;
      // width: 400px !important;
      overflow-wrap: break-word;
      justify-content: space-between; /* 左右两端对齐 */
      // background-color: red;
      white-space: pre-line !important; // 识别换行\n
      > :first-child {
        float: left;
      }
      > :nth-child(2) {
        float: right;
      }
    }
  }
}
</style>
