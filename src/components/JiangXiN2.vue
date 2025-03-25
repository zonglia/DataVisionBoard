<template>
  <dv-full-screen-container>
    <div class="jiangXiN2-container">
      <!-- 标题 -->
      <div class="jiangXiN2-title">
        <Title title="江西N2工厂智能看板" />
      </div>

      <div class="jiangXiN2-main-container">
        <div class="jiangXiN2-main">
          <div>
            <dv-border-box8>
              <div style="padding: 3px">
                <div
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                  "
                >
                  <dv-decoration-11 style="width: 200px; height: 60px">
                    <div color-green font-600 bg="~ dark/0">
                      工厂设备保养记录设备维护
                    </div>
                  </dv-decoration-11>
                </div>

                <MaintenancePlan />
              </div>
            </dv-border-box8>
          </div>
          <div>
            <dv-border-box12>
              <div style="padding: 3px">
                <div
                  style="
                    width: 100%;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <dv-decoration-11 style="width: 200px; height: 60px">
                    <div color-green font-600 bg="~ dark/0">工厂试产总良率</div>
                  </dv-decoration-11>
                </div>
                <TrialYieldRate />
              </div>
            </dv-border-box12>
          </div>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script setup lang="ts">
import MaintenancePlan from "../views/chart/MaintenancePlan.vue";
import TrialYieldRate from "../views/chart/TrialYieldRate.vue";
</script>

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
      column-gap: 20px;
      > div {
        height: 100%;
        width: 100%;
      }
      > div:nth-child(1) {
      }
      > div:nth-child(2) {
      }
    }
  }
}
</style>
