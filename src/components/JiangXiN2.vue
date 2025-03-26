<template>
  <dv-full-screen-container>
    <div class="jiangXiN2-container">
      <!-- 标题 -->
      <div class="jiangXiN2-title">
        <Title title="江西N2工厂智能展示" />
      </div>

      <div class="jiangXiN2-main-container">
        <div class="jiangXiN2-main">
          <div>
            <dv-border-box12>
              <div style="padding: 0.12rem; box-sizing: border-box">
                <div
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 0.2rem;
                  "
                >
                  <dv-decoration-11 style="width: 200px; height: 60px">
                    <div color-green font-600 bg="~ dark/0">
                      工厂设备保养/设备维护管控
                    </div>
                  </dv-decoration-11>
                </div>

                <MaintenancePlan />
              </div>
            </dv-border-box12>
          </div>
          <div>
            <dv-border-box12>
              <div style="padding: 3px">
                <div
                  style="
                    width: 100%;
                    margin-bottom: 0.2rem;
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
  background: url(../assets/image/bg5.jpg) no-repeat center;
  background-size: cover;
  .jiangXiN2-title {
    height: 15%;
    // margin-bottom: 0.1rem;
  }
  .jiangXiN2-main-container {
    width: 100%;
    height: 85%;
    padding-top: 0.25rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-bottom: 0.6rem;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    .jiangXiN2-main {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      > div {
      }
      > div:nth-child(1) {
      }
      > div:nth-child(2) {
      }
    }
  }
}
</style>
