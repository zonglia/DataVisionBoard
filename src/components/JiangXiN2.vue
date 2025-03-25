<template>
  <div class="jiangXiN2-container">
    <!-- 标题 -->
    <div class="jiangXiN2-title">
      <Title title="江西N2工厂看板" />
    </div>

    <div class="jiangXiN2-main-container">
      <div class="jiangXiN2-main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.jiangXiN2-container {
  width: 100%;
  height: 100%;
  background: url(../assets/image/bg.png) no-repeat center;
  background-size: cover;
  .jiangXiN2-title {
    height: 10%;
  }
  .jiangXiN2-main-container {
    width: 100%;
    height: 90%;
    padding: 40px;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    .jiangXiN2-main {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      > div {
        height: 100%;
        width: 100%;
      }
      > div:nth-child(1) {
        background-color: yellow;
      }
        > div:nth-child(4) {
        background-color: #bfa;
      }
    }
  }
}
</style>
