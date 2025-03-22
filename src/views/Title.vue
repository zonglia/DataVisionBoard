<template>
  <div class="title">
    <dv-decoration8 style="width: 10rem; height: 0.625rem;" />
    <div>
      <h2>数据大屏</h2>
      <dv-decoration5 :dur="2" style="width: 8rem; height: 0.5rem" />
    </div>

    <dv-decoration8 :reverse="true" style="width: 10rem; height: 0.625rem" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title {
  width: 100%;
  //   background-color: red;
  height: 1.75rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  // background-color: red;

  h2 {
    padding: 0;
    margin: 0;
    margin-top: 0.0625rem;
    color: #fff;
    letter-spacing: 0.0625rem;
  }
}
</style>
