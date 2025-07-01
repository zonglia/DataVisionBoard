<template>
  <dv-border-box12 class="dv-border-box12">
    <!-- 标题＋刷新时间 -->
    <div style="height: 2rem;">
      <!-- 标题 -->
      <div>
        <dv-decoration7>
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
          <SvgIcon name="refresh" color="#409eff" size="0.8rem" />刷新
        </div>
        <div style="font-size: 0.6rem">最后刷新{{ currentRefreshTime }}</div>
      </div>
    </div>

    <div style="height: calc(100% - 2.3rem);">
      <slot></slot>
    </div>
  </dv-border-box12>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// 定义 emit 事件
const emit = defineEmits(["refresh"]);
const currentRefreshTime = ref("");
const handleRefresh = () => {
  // 更新刷新时间
  currentRefreshTime.value = formatTime();
  emit("refresh", props.title); // 确保这里传递了title
};

// 格式化时间函数
const formatTime = () => {
  const now = new Date();
  return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
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
    default: "1rem",
  },
  iconSize: {
    type: String,
    default: "1rem",
  },
});

// 初始化刷新时间
onMounted(() => {
  currentRefreshTime.value = formatTime();
});
</script>

<style scoped lang="scss">
.dv-border-box12 {

  padding: 0.3rem 0.3rem 0rem;
  padding-bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
  // 移动端布局
  @media (max-width: 992px) {
    padding: 0.3rem 0.3rem 0rem;
  }
}
.refresh {
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
}
</style>
