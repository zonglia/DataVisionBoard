<!-- CarouselComponent.vue -->
<template>
  <div class="block">
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" class="carousel-image" :alt="'轮播图' + index" />
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
});
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
