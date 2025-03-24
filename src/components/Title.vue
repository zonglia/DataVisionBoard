<template>
  <div class="title">
    <div><dv-decoration8 style="width: 100%; height: 50%" /></div>
    <div class="title-content">
      <h2>{{ title }}</h2>
      <dv-decoration5 :dur="2" style="width: 60%; height: 50%" />
    </div>
    <div>
      <dv-decoration8 :reverse="true" style="height: 50%;"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
});
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0;
  > div {
    width: 100%;
    height: 100%;
  }
  .title-content {
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center; // 垂直居中
    align-items: center; // 水平居中
    h2 {
      margin: 0; // 清除默认边距
      padding: 0 10px; // 添加文字内边距
      padding-top:.2rem;
      font-size: .3rem;
    }
  }
}
</style>
