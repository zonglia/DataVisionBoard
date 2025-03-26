<template>
  <dv-full-screen-container>
    <div class="drilling-container">
      <div class="drilling-title">
        <Title title="钻孔、成型车间智能管理看板" />
      </div>
      <div class="drilling-main-container">
        <div class="drilling-main">
          <div>
            <div><C1ProductionRate /></div>
            <div><C1ScrapAreaRate /></div>
          </div>
          <div>
            <Carousel :imgList="imgList" />
          </div>
          <div></div>
          <div></div>
          <div>
            <div><ProductionRate /></div>
            <div><ScrapAreaRate /></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div></div
  ></dv-full-screen-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductionRate from "@/views/chart/ProductionRate.vue";
import C1ProductionRate from "@/views/chart/C1ProductionRate.vue";
import ScrapAreaRate from "@/views/chart/ScrapAreaRate.vue";
import C1ScrapAreaRate from "@/views/chart/C1ScrapAreaRate.vue";
import Carousel from "./Carousel.vue";

const imgList = ref([
  {
    url: new URL(`../assets/image/drilling/banner1.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner2.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner3.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner4.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner5.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner6.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner7.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner8.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner9.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner10.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner11.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner12.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner13.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner14.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner15.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner16.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner17.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner18.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner19.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner20.png`, import.meta.url).href,
  },
]);
</script>

<style scoped lang="scss">
.drilling-container {
  width: 100%;
  height: 100%;
  background: url(../assets/image/bg5.jpg) no-repeat center;
  background-size: cover;
  background-color: red;
  display: grid;
  grid-template-rows: 1.5fr 8.5fr;
  box-sizing: border-box;
  min-height: 0; // 允许子项压缩
  .drilling-main-container {
    height: 100%;

    box-sizing: border-box;
    padding: 20px;
    .drilling-main {
      // overflow: auto; // 内容溢出时出现滚动条
      height: 100%;
      display: grid;
      box-sizing: border-box;
      min-height: 0; // 允许子项压缩
      grid-template-rows: repeat(2, 1fr); // 等同于 1fr 1fr
      grid-template-columns: repeat(4, 1fr); // 等同于 1fr 1fr 1fr 1fr
      column-gap: 0.2rem;
      > div {
        width: 100%;
        height: 100%;
      }
      > div:nth-child(1) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        > div:nth-child(1) {
          height: 100%;
        }
      }
      > div:nth-child(3) {
        background-color: #bfa;
      }
      > div:nth-child(8) {
        background-color: yellow;
      }
    }
  }
}
</style>
