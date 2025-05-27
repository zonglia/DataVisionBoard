<template>
  <Card :title="props.title" :svgName="props.svgName">
    <Carousel :imgList="imgList" />
  </Card>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "轮播图",
  },
  svgName: {
    type: String,
    default: "ctrol",
  },
  imgList: {
    type: Array as () => Array<{ url: string }>,
    default: () => [],
  },
});

// 默认图片列表（保持你需要的URL格式）
const defaultImgList = ref([
  {
    url: new URL(`@/assets/image/drilling/banner1.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner2.png`, import.meta.url).href,
  },
]);

// 合并默认图片和传入的图片
const imgList = computed(() => {
  // 如果传入的imgList不为空则使用，否则使用默认图片列表
  return props.imgList.length > 0 ? props.imgList : defaultImgList.value;
});
</script>

<style scoped lang="scss"></style>
