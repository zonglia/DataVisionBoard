<template>
  <el-carousel
    trigger="click"
    indicator-position="none"
    class="full-height-carousel"
  >
    <el-carousel-item
      v-for="(item, index) in imgList"
      :key="index"
      class="carousel-item"
    >
      <img
        :src="item.url"
        class="carousel-image"
        alt="轮播图"
        :style="{ background: getFillColor(item.url) }"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
defineProps({
  imgList: {
    type: Array as PropType<{ url: string }[]>, // 类型定义为包含url属性的对象数组
    default: () => [] as { url: string }[],
  },
  height: {
    type: String,
    default: "5rem", // 默认高度
  },
  imgFillColor: {
    type: String, // 支持颜色格式如 "#fff"、"rgba(255,255,255,0.8)"
    default: "#FFFFFF", // 默认背景色
  },
});

// 新增颜色计算逻辑
const getFillColor = (url: string) => {
  if (url.includes("banner")) return "#fff"; // banner前缀白色背景
  if (url.includes("cpk")) return "#F1ECE2"; // cpk前缀F1ECE2背景
  if (url.includes("bead")) return "#A3C6C2"; // cpk前缀F1ECE2背景
  // if (url.includes("35646A")) return "#35646A";

  return "#fff"; // 默认颜色
};
</script>

<style scoped lang="scss">
/* 确保轮播组件完全继承父容器高度 */
.full-height-carousel {
  height: 100%;
  border-radius: 0.125rem;
  :deep(.el-carousel__container) {
    /* 穿透作用域样式 */
    height: 100%;
  }
  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;


    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: contain; // 控制图片缩放方式
      background: transparent !important; // 深色背景用于浅色图片
    }
  }
}
</style>
