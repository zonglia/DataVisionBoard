<template>
  <div class="summary-card">
    <div>
      <dv-border-box1
        style="
          color: #fff;
          width: 400px;
          height: 250px;
          /* background-color: red; */
        "
      >
        <div style="padding: 20px">
          <Test />
        </div>
      </dv-border-box1>

      <dv-border-box1 style="color: #fff; width: 400px; height: 330px">
        <div>
          <ProductionRate />
        </div>
      </dv-border-box1>

      <dv-border-box1
        style="
          color: #fff;
          width: 400px;
          height: 250px;
          /* background-color: red; */
        "
      >
        <div style="padding: 20px">
          <DeviceAlarmLog />
        </div>
      </dv-border-box1>
    </div>

    <div>2</div>
    <div>3</div>
  </div>
</template>

<script setup lang="ts">
import Test from "./chart/test.vue";
import scrollboard from "./chart/scrollboard.vue";
import ProductionRate from "./chart/ProductionRate.vue";
import DeviceAlarmLog from "./chart/DeviceAlarmLog.vue";
</script>

<style scoped lang="scss">
.summary-card {
  width: 100%;
  height: 100%;
  display: grid;
  padding: 15px;

  grid-template-columns: 1fr 4fr;

  grid-template-rows: 3fr 2fr;
  div {
    height: 100%;
    width: 100%;
  }
  div:nth-child(1) {
    grid-row: 1 /3;
  }
}
</style>
