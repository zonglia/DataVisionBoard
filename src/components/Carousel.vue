<!-- CarouselComponent.vue -->
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
        :style="{ background: imgFillColor }"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
defineProps({
  imgList: {
    type: Array,
    default: () => [],
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
      background: #fff; // 深色背景用于浅色图片
    }
}
}
</style>
