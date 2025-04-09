<template>
  <Carousel :imgList="imgList" />
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
const imgList = ref([
  {
    url: new URL(`@/assets/image/aoi/bead/bead01.png`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
:deep(.el-carousel__item) img {
  object-fit: contain;
}
</style>
