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
                  <dv-decoration-11 style="width: 5rem; height: 60px">
                    <div style="letter-spacing: 0.1rem; font-size: 13px">
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
                  <dv-decoration-11 style="width: 5rem; height: 60px">
                    <div style="letter-spacing: 0.1rem; font-size: 13px">
                      工厂试产总良率
                    </div>
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
  background: url(../assets/image/bg6.jpg) no-repeat center;
  background-size: cover;
  position: relative; // 新增定位
  // 新增模糊背景层
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/image/bg6.jpg) no-repeat center;
    background-size: cover;
    filter: blur(4px); // 模糊强度
    z-index: 0; // 置于底层
  }
  // 保证内容层在模糊层之上
  > * {
    position: relative;
    z-index: 1;
  }
  .jiangXiN2-title {
    height: 15%;
    // margin-bottom: 0.1rem;
  }
  .jiangXiN2-main-container {
    width: 100%;
    height: 85%;
    padding-top: 0.25rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-bottom: 0.6rem;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    .jiangXiN2-main {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 0.25rem;

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
