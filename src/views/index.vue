<template>
  <div class="container">
    <!-- 标题 -->
    <div class="header">
      <Title />
    </div>
    <!-- 按钮（切换页面） -->
    <div class="btn" style="display: flex; padding-left: 35px">
      <dv-button color="#4fd2dd" @click="currentPage = SummaryCard"
        >汇总看板</dv-button
      >
      <dv-button
        color="#235fa7"
        style="margin-left: 15px"
        bg="true"
        @click="currentPage = Test"
        ><span style="color: #fff">车间看板</span>
      </dv-button>
    </div>

    <!-- 显示主体，内容区 -->
    <div class="main">
      <keep-alive>
        <component :is="currentPage" />
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "./Title.vue";
import SummaryCard from "./SummaryCard.vue";
import Test from "./chart/test.vue";

import { ref } from "vue";
const currentPage = ref(SummaryCard); // 初始显示 SummaryCard(汇总看板)
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 100%;
    // background-color: red;
  }
}
</style>
