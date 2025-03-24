<template>
  <div class="electroPlating-container">
    <!-- 标题 -->
    <div class="electroPlating-title">
      <Title title="电镀车间智能管理看板" />
    </div>
    <!-- 主体内容 -->
    <div class="electroPlating-main">
      <!-- <DeviceAlarmLog /><MaintenancePlan/> -->
      <div>
        <div style="width: 100%; background-color: aqua">
          <DeviceAlarmLog />
        </div>
        <div style="width: 100%; background-color: yellow">
          <MaintenancePlan />
        </div>
      </div>
      <div>
        <div>2-1</div>
        <div>2-2</div>
        <div>2-3</div>
      </div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "./Title.vue";
import DeviceAlarmLog from "../views/chart/DeviceAlarmLog.vue";
import MaintenancePlan from "../views/chart/MaintenancePlan.vue";
</script>

<style scoped lang="scss">
.electroPlating-container {
  width: 100vw;
  height: 100vh;
  background: url(../assets/image/bg.png) no-repeat center;
  background-size: cover;
  // transform: scale(0.8); /* 可以根据需要调整比例 */
  // transform-origin: top left; /* 设置缩放基点为左上角 */
  .electroPlating-title {
    height: 10%;
  }
  .electroPlating-main {
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 3fr 1fr;
    padding: 20px;
    // background-color: red;
    > div {
      height: 100%;
      width: 100%;
    }
    > div:nth-child(1) {
      grid-row: 1 /3;
    }
    > div:nth-child(2) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      > div:nth-child(1) {
        grid-row: 1 /3;
      }
    }
    > div:nth-child(3) {
    }
  }
}
</style>
