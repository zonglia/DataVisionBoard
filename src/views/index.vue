<template>
  <div class="index-container">
    <el-row :gutter="50">
      <el-col
        v-for="button in buttons"
        :key="button.route"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="3"
      >
        <el-button type="primary" @click="router.push(button.route)">
          {{ button.label }}
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 按钮配置数组
const buttons = [
  { label: "江西N2工厂智能展示", route: "/jiangXiN2" },
  { label: "钻孔、成型", route: "/drilling" },
  { label: "BBT、AVI、包装", route: "/bbtAvi" },
  { label: "外层、AOI", route: "/aoi" },
  { label: "电镀", route: "/electroPlating" },
  { label: "防焊、文字", route: "/droughtPrevention" },
  // { label: "二维码", route: "/qrCode" },
  // { label: '测试', route: '/test' }
];
</script>

<style scoped lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  .el-row {
    width: 100%;
  }
  .el-button {
    width: 100%;
    margin: 0.6rem;
  }
}
</style>
