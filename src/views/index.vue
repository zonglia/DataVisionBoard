<template>
  <el-button type="primary" @click="ToElectroPlating">电镀车间</el-button>
  <el-button type="primary" @click="ToDrilling">开料钻孔成型</el-button>
  <el-button type="primary" @click="ToDroughtPrevention">防焊车间</el-button>
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
</script>
