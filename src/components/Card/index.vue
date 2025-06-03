<template>
  <dv-border-box12
    style="
      padding: 0.25rem 0.1rem 0;
      padding-bottom: 0;
      box-sizing: border-box;
      overflow: hidden;
    "
  >
    <!-- 标题＋刷新时间 -->
    <div style="height: 0.7rem">
      <!-- 标题 -->
      <div>
        <dv-decoration7 style="height: 0.4rem">
          <SvgIcon :name="svgName" color="#409eff" :size="iconSize" /><span
            :style="{
              fontSize: titleFontSize,
              fontWeight: 600,
            }"
            >{{ title }}</span
          >
        </dv-decoration7>
      </div>

      <div
        style="
          display: flex;
          justify-content: space-between;
          height: 0.3rem;
          padding: 0 0.1rem; /* 上下为0，左右为0.2rem */
        "
      >
        <div class="refresh" @click="handleRefresh">
          <SvgIcon name="refresh" color="#409eff" size="0.3rem" />刷新
        </div>
        <div style="font-size: 0.18rem">最后刷新{{ refreshTime }}</div>
      </div>
    </div>

    <div style="height: calc(100% - 0.8rem);">
      <slot></slot>
    </div>
  </dv-border-box12>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

// 定义 emit 事件
const emit = defineEmits(["refresh"]);

const handleRefresh = () => {
  emit("refresh", props.title); // 确保这里传递了title
};
const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  svgName: {
    type: String,
    default: "ctrol",
  },
  titleFontSize: {
    type: String,
    default: "0.3rem",
  },
  iconSize: {
    type: String,
    default: "0.3rem",
  },

  refreshTime: {
    type: String,
    default: (() => {
      const now = new Date();
      return `${now.getFullYear()}/${
        now.getMonth() + 1
      }/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    })(), // 立即执行函数
  },
});
</script>

<style scoped lang="scss">
.refresh {
  cursor: pointer;
  font-size: 0.25rem;
  display: inline-flex;
  align-items: center;
}
</style>
