<template>
  <div class="title">
    <dv-decoration8 style="width: 400px; height: 50px" />
    <div>
      <h2>数据大屏</h2>
      <dv-decoration5 :dur="2" style="width: 600px; height: 40px" />
    </div>

    <dv-decoration8 :reverse="true" style="width: 400px; height: 50px" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title {
  width: 100%;
  //   background-color: red;
  height: 70px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  h2 {
    color: #fff;
    letter-spacing: 5px;
  }
}
</style>
