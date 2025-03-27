<template>
  <div>
    <Carousel :imgList="cpkImgList" imgFillColor="#F1ECE2" />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";

const cpkImgList = ref([
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

<style scoped lang="scss"></style>
