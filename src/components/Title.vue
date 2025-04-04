<template>
  <div class="title">
    <div>
      <div><dv-decoration8 style="width: 100%; height: 1.3rem" /></div>
      <div class="title-content">
        <h2>{{ title }}</h2>
        <dv-decoration5 :dur="2" style="width: 50%; height: 0.5rem" />
      </div>
      <div>
        <dv-decoration8
          :reverse="true"
          style="width: 100%; height: 1.3rem; float: right"
        />
      </div>
    </div>
    <div>
      <h3 v-show="process"><SvgIcon name="tool" color="#409eff"/>工序：{{ process }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  process: {
    type: String,
    default: "" // 默认值为空则不显示
  }
});
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  height: 100%;
  display: flex; // 启用弹性布局
  flex-direction: column; // 垂直排列
  > div:nth-child(1) {
    flex: 7;
    // background-color: red;
    display: flex; // 启用弹性布局
    justify-content: space-between; // 子元素均匀分布（两侧贴边，中间居中）
    > div:nth-child(1) {
      flex: 2;
    }
    > div:nth-child(2) {
      flex: 6;
      display: flex; /* 启用弹性布局 */
      flex-direction: column; /* 子元素垂直排列 */
      align-items: center; 
      justify-content: center; 
    }
    > div:nth-child(3) {
      flex: 2;
    }
    .title-content {
      // background-color: red;
      text-align: center;
      h2 {
        margin: 0; // 清除默认边距
        font-size: 0.5rem;
        padding-top: 0.5rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  > div:nth-child(2) {
    flex: 3;
    // background-color: blue;
    padding-left: 0.6rem;
    font-size: 0.3rem;
    align-items: center;//在垂直方向居中对齐
    
  }
}
// .title {
//   width: 100%;
//   height: 100%;
//   display: flex; // 启用弹性布局
//   justify-content: space-between; // 子元素均匀分布（两侧贴边，中间居中）
//   background-color: black;
//   > div:nth-child(1) {
//     flex: 2;
//   }
//   > div:nth-child(2) {
//     flex: 6;
//     display: flex; /* 启用弹性布局 */
//     flex-direction: column; /* 子元素垂直排列 */
//     align-items: center; /* 水平居中 */
//     justify-content: center; /* 垂直居中（若需整体居中） */
//   }
//   > div:nth-child(3) {
//     flex: 2;
//   }
//   .title-content {
//     // background-color: red;
//     text-align: center;
//     h2 {
//       margin: 0; // 清除默认边距
//       font-size: 0.3rem;
//       padding-top: 0.5rem;
//       letter-spacing: 0.1rem;
//     }
//   }
//   > div {
//     width: 100%;
//   }
// }

:deep(.dv-decoration-8) {
  polyline {
    stroke: #02f2f6;
    stroke-width: 2;
  }
}

:deep(.dv-decoration-5) {
  polyline {
    stroke: #02f2f6;
    stroke-width: 2;
  }
}
</style>
