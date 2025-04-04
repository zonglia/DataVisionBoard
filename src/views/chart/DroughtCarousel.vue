<template>

    <Carousel :imgList="imgList"  />

</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
const imgList = ref([
  {
    url: new URL(`@/assets/image/drought/cpk01.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk02.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk03.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk04.png`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
:deep(.el-carousel__item) img {
  object-fit: cover;
}
</style>
