<template>
  <div class="jiangXiN2-container">
    <!-- 标题 -->
    <div class="jiangXiN2-title">
      <Title title="江西N2工厂智能展示" />
    </div>

    <div class="jiangXiN2-main-container">
      <div>
        <dv-border-box12
          style="
            padding: 0.078rem;
            padding-bottom: 0;
            box-sizing: border-box;
            padding-top: 0.2rem;
          "
        >
          <div>
            <dv-decoration7 style="height: 0.47rem">
              <h2 style="font-size: 0.4rem">
                <SvgIcon
                  name="maintenance"
                  color="#409eff"
                  size=".5rem"
                />工厂设备保养/设备维护管控
              </h2>
            </dv-decoration7>
          </div>

          <div
            style="
              flex: 1;
              height: calc(100% - 0.47rem - 0.078rem);
              position: relative;
            "
          >
            <MaintenancePlan style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="
            padding: 0.078rem;
            padding-bottom: 0;
            box-sizing: border-box;
            padding-top: 0.2rem;
          "
        >
          <div>
            <dv-decoration7 style="height: 0.47rem">
              <h2 style="font-size: 0.4rem">
                <SvgIcon
                  name="yield"
                  color="#409eff"
                  size=".5rem"
                />工厂试产总良率
              </h2>
            </dv-decoration7>
          </div>

          <div
            style="
              flex: 1;
              height: calc(100% - 0.47rem - 0.078rem);
              position: relative;
            "
          >
            <TrialYieldRate style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaintenancePlan from "../views/chart/MaintenancePlan.vue";
import TrialYieldRate from "../views/chart/TrialYieldRate.vue";
</script>

<style scoped lang="scss">
.jiangXiN2-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */

  background: url(../assets/image/bg6.jpg) no-repeat center;
  background-size: cover;
  position: relative;
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
  //   大标题
  > div:nth-child(1) {
    flex: 2;
  }
  //   内容容器
  > div:nth-child(2) {
    height: 100%;
    flex: 8;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    padding-top: 0.5rem;
    gap: 0.2rem; // 行间距
    box-sizing: border-box;
    > div {
      flex: 1;
    }
  }
}
</style>
