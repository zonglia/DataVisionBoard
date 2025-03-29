<template>
  <div class="index-container">
    <el-button type="primary" @click="ToJiangXiN2"
      >江西N2工厂智能展示</el-button
    >
    <el-button type="primary" @click="ToDrilling"
      >钻孔、成型车间智能管理看板</el-button
    >
    <el-button type="primary" @click="ToBBTAVI"
      >BBT AVI 包装 车间智能化电子化管控</el-button
    >

    <el-button type="primary" @click="ToAOI">AOI</el-button>

    <el-button type="primary" @click="ToElectroPlating">电镀车间</el-button>

    <el-button type="primary" @click="ToDroughtPrevention">防焊车间</el-button>
    <el-button type="primary" @click="ToTest">测试</el-button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 基础路径跳转
const ToDrilling = () => {
  router.push("/drilling"); // 等同于 <router-link to="/home">
};
const ToElectroPlating = () => {
  router.push("/electroPlating"); // 等同于 <router-link to="/home">
};
const ToDroughtPrevention = () => {
  router.push("/droughtPrevention"); // 等同于 <router-link to="/home">
};
const ToJiangXiN2 = () => {
  router.push("/jiangXiN2"); // 等同于 <router-link to="/home">
};
const ToBBTAVI = () => {
  router.push("/bbtAvi"); // 等同于 <router-link to="/home">
};

const ToAOI = () => {
  router.push("/aoi"); // 等同于 <router-link to="/home">
};

const ToTest = () => {
  router.push("/test"); // 等同于 <router-link to="/home">
};
</script>

<style scoped lang="scss">
.index-container {
  width: 100vw;
  height: 100vh;
}
</style>
