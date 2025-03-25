<template>
  <div class="electroPlating-container">
    <!-- 标题 -->
    <div class="electroPlating-title">
      <Title title="电镀车间智能管理看板" />
    </div>
    <!-- 主体内容 -->
    <div class="electroPlating-main-container">
      <div class="electroPlating-main">
        <!-- 左侧 -->
        <div>
          <div>
            <dv-border-box1>
              <div style="padding: 10px">
                <MaintenancePlan />
              </div>
            </dv-border-box1>
          </div>
          <div>
            <dv-border-box1>
              <div style="padding: 10px">
                <ItemThree />
              </div>
            </dv-border-box1>
          </div>
        </div>
        <!-- 中间 -->
        <div>
          <div>
            <dv-border-box1>
              1
              <div style="padding: 0.1rem">
                <ProcessWip />
              </div>
            </dv-border-box1>
          </div>
          <div>
            <dv-border-box1>
              <div style="padding: 0.1rem"><AttendanceApproval /></div>
            </dv-border-box1>
          </div>
          <div>
            <dv-border-box1>
              <div style="padding: 0.1rem"><PlatingScrapLiveBoard /></div>
            </dv-border-box1>
          </div>
        </div>
        <!-- 最下面 -->
        <div>
          <dv-border-box1>
            <div style="padding: 10px">
              <DeviceAlarmLog />
            </div>
          </dv-border-box1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "./Title.vue";
import DeviceAlarmLog from "../views/chart/DeviceAlarmLog.vue";
import MaintenancePlan from "../views/chart/MaintenancePlan.vue";
import ProcessWip from "../views/chart/ProcessWip.vue";
import ItemThree from "../views/chart/itemThree.vue";
import AttendanceApproval from "../views/chart/AttendanceApproval.vue";
import PlatingScrapLiveBoard from "../views/chart/PlatingScrapLiveBoard.vue";
</script>

<style scoped lang="scss">
.electroPlating-container {
  width: 100vw;
  height: 100vh;
  background: url(../assets/image/bg.png) no-repeat center;
  background-size: cover;

  .electroPlating-title {
    height: 10%;
  }
  .electroPlating-main-container {
    width: 100%;
    height: 90%;
    padding: 10px;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    .electroPlating-main {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 3fr 1fr;
      > div {
        height: 100%;
        width: 100%;
      }
      > div:nth-child(1) {
        height: 100%;
        grid-row: 1 /3;
        display: grid;
        grid-template-rows: 1fr 2fr;
        > div:nth-child(1) {
          width: 100%;
        }
        > div:nth-child(2) {
          box-sizing: border-box; // 使 padding 包含在设定高度内
          padding-top: 0.35rem;
          width: 100%;
        }
      }
      > div:nth-child(2) {
        box-sizing: border-box; // 使 padding 包含在设定高度内

        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        > div:nth-child(1) {
          // grid-column: 1 /3;

          grid-column: 1 /3;
        }
        > div:nth-child(3) {
        }
      }
      > div:nth-child(3) {
      }
    }
  }
}
</style>
