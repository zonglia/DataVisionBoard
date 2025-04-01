<template>
  <div>
    <Carousel :imgList="imgList" imgFillColor="#F1ECE2" />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
const imgList = ref([
  {
    url: new URL(`@/assets/image/drought/01.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/02.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/03.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/04.png`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
:deep(.el-carousel__item) img {
  object-fit: cover;
}
</style>
