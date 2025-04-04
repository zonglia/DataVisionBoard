<template>

    <Carousel :imgList="imgList" imgFillColor="#A4C7C3" />

</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
const imgList = ref([
  {
    url: new URL(`@/assets/image/drought/bead01.jpg`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
:deep(.el-carousel__item) img {
  object-fit: cover;
}
</style>
