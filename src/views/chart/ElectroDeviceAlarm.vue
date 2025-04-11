<template>
  <div demo-bg>
    <dv-scroll-board :config="config" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, reactive } from "vue";

// 获取当天日期格式化函数
const getCurrentDate = () => {
  const today = new Date();
  return `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
};


const config = reactive({
  header: ["线体", "异常报警", "报警时间"],
  data: [
       ["VCP1#线", "抗氧化液位过低请检查", `${getCurrentDate()} 20:19`],
    ["VCP1#线", "烘干温度异常", `${getCurrentDate()} 8:22`],
    ["除胶渣日蚀线1#", "急停按下请检查", `${getCurrentDate()} 18:39`],
    ["除胶渣日蚀线1#", "水刀洗2液位过低请检查", `${getCurrentDate()} 9:14`],
  ],
  columnWidth: [50],
  align: ["center"],
  rowNum: [3],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
  evenRowBGC: ["#026CCA80"],
});


// 定义向父组件发送事件的 emit
const emit = defineEmits(["alarm-refresh-time-updated"]);

// 定时器ID
let timer: number | null = null;

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    const lastRefreshTime = `${now.getFullYear()}/${
      now.getMonth() + 1
    }/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    emit("alarm-refresh-time-updated", lastRefreshTime);

    console.log("hello world");
  };
  // 立即执行一次确保初始值
  updateTime();

  // 设置定时器，每隔2秒执行一次
  timer = setInterval(updateTime, 2000); // 2000毫秒 = 2秒
});

onUnmounted(() => {
  // 组件卸载时清除定时器
  if (timer) {
    clearInterval(timer);
  }
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