<!-- CarouselComponent.vue -->
<template>
  <div class="block">
    <el-carousel indicator-position="none" :height="height">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img
          :src="item.url"
          class="carousel-image"
          :alt="'轮播图' + index"
          :style="{ background: imgFillColor }"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
defineProps({
  imgList: {
    type: Array,
    default: () => [],
  },
  height: {
    type: String, // 需包含单位，如 "5.48rem"、"200px"
    default: "5.48rem", // 默认高度
  },
  imgFillColor: {
    type: String, // 支持颜色格式如 "#fff"、"rgba(255,255,255,0.8)"
    default: "#FFFFFF", // 默认背景色
  },
});
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: #fff; /* 填充颜色 */
}
</style>
