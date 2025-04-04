<template>
  <Carousel :imgList="imgList" />
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
const imgList = ref([
  {
    url: new URL(`@/assets/image/drilling/banner1.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner2.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner3.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner4.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner5.png`, import.meta.url).href,
  },

  {
    url: new URL(`@/assets/image/drilling/banner6.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner7.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner8.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner9.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner10.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk1.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk2.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk3.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk4.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk5.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk6.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk7.png`, import.meta.url).href,
  },
   {
    url: new URL(`@/assets/image/drilling/cpk/cpk8.png`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
:deep(.el-carousel__item) img {
  object-fit: cover;
}
</style>
