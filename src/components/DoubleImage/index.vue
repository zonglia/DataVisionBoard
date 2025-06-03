<template>
  <Card :title="props.title" :svgName="props.svgName">
    <div style="display: flex; gap: 0.1rem; padding: 0.05rem">
      <div style="flex: 1" v-for="(img, index) in imgList" :key="index">
        <img :src="img.url" alt="轮播图" style="width: 100%; height: 92%" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "@/components/Card/index.vue";
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
