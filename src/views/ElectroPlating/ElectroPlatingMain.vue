<template>
  <div class="electro-main-container">
    <!-- 第一行 -->
    <div>
      <!-- 人员出勤 -->
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="users" color="#409eff" />人员出勤
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>

          <div style="flex: 1; height: calc(100% - 0.8rem)">
            <ElectroAttendance
              @refresh-time-updated="handleRefreshTimeUpdated"
            />
          </div>
        </dv-border-box12>
      </div>
      <!-- 工序产出 -->
      <div>
        <dv-border-box12 style="padding: 0.1rem; box-sizing: border-box">
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="output" color="#409eff" />工序产出
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>

          <div
            style="
              flex: 1;
              height: calc(100% - 0.8rem);
              position: relative;
              display: flex;
              flex-direction: row;
            "
          >
            <ElectroProcessOutputBar />
            <ElectroMonthlyOutput /></div
        ></dv-border-box12>
      </div>
      <!-- 工序WIP -->
      <div>
        <dv-border-box12
          style="padding: 0.07rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="wip" color="#409eff" />工序WIP
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>

          <div
            style="
              flex: 1;
              height: calc(100% - 0.07rem - 0.7rem);
              padding-bottom: 0;
            "
          >
            <ElectroWipRecords style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
    </div>
    <!-- 第二行 -->
    <div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="scrap" color="#409eff" />电镀报废率趋势
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>
          <div style="flex: 1; height: calc(100% - 0.8rem)">
            <ElectroScrapTrend style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.4rem">
              <SvgIcon name="scrap" color="#409eff" />面铜CPK管控
            </dv-decoration7>
          </div>
          <div style="height: calc(100% - 0.078rem - 0.4rem - 0.02rem)">
            <ElectroSurfaceCopperCarousel />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.07rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="ctrol" color="#409eff" />设备保养周期
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>
          <div
            style="
              flex: 1;
              height: calc(100% - 0.07rem - 0.7rem);
              padding-bottom: 0;
            "
          >
            <ElectroMaintenance style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.07rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="alarm" color="#409eff" />设备报警记录
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ alarmLastRefreshTime }}</span
              >
            </div>
          </div>
          <div
            style="
              flex: 1;
              height: calc(100% - 0.07rem - 0.7rem);
              padding-bottom: 0;
            "
          >
            <ElectroDeviceAlarm
              @alarm-refresh-time-updated="handleAlarmRefreshTimeUpdated"
              style="height: 100%"
            />
          </div>
        </dv-border-box12>
      </div>
    </div>
    <!-- 第三行 -->
    <div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="setting" color="#409eff" />电镀报废分析
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>
          <div style="flex: 1; height: calc(100% - 0.078rem - 0.7rem)">
            <ElectroDefectPieChart style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.4rem">
              <SvgIcon name="scrap" color="#409eff" />孔铜CPK管控
            </dv-decoration7>
          </div>
          <div style="height: calc(100% - 0.5rem)">
            <ElectroHoleCopperCarousel />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.07rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="ctrol" color="#409eff" />重要参数管控
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>
          <div
            style="
              flex: 1;
              height: calc(100% - 0.07rem - 0.7rem);
              padding-bottom: 0;
            "
          >
            <ElectroKeyParamsContro style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <!-- 标题＋刷新时间 -->
          <div style="height: 0.7rem">
            <!-- 标题 -->
            <div>
              <dv-decoration7 style="height: 0.4rem">
                <SvgIcon name="status" color="#409eff" />设备状态
              </dv-decoration7>
            </div>

            <div style="height: 0.3rem; text-align: right">
              <span style="font-size: 0.18rem"
                >最后刷新{{ attendanceLastRefreshTime }}</span
              >
            </div>
          </div>

          <div style="height: calc(100% - 0.8rem)">
            <div
              style="
                text-align: center;
                font-size: 0.2rem;
                border-bottom: 0.0125rem solid #eaeefb;
                letter-spacing: 0.02rem;
              "
            >
              <span class="status-item">
                <span class="booting status-light"></span>
                <span>开机</span>
              </span>
              <span class="status-item">
                <span class="running status-light"></span>
                <span>运行</span>
              </span>
              <span class="status-item">
                <span class="maintenance status-light"></span>
                <span>保养</span>
              </span>
              <span class="status-item">
                <span class="shutdown status-light"></span>
                <span>关机</span>
              </span>
            </div>
            <div class="devices-container">
              <div v-for="(device, index) in devices" :key="index">
                <span class="status-item">
                  <!-- 动态绑定指示灯类名 -->
                  <span
                    class="status-light"
                    :class="{
                      booting: device.status === 0,
                      running: device.status === 1,
                      maintenance: device.status === 2,
                      shutdown: device.status === 3,
                    }"
                  ></span>
                  <!-- 显示设备名称和状态文字 -->
                  <span>{{ device.name }} </span>
                </span>
              </div>
            </div>
          </div>
        </dv-border-box12>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import { ref } from "vue";
import ElectroAttendance from "@/views/chart/ElectroAttendance.vue";
import ElectroProcessOutputBar from "@/views/chart/ElectroProcessOutputBar.vue";
import ElectroMonthlyOutput from "@/views/chart/ElectroMonthlyOutput.vue";
import ElectroWipRecords from "@/views/chart/ElectroWipRecords.vue";
import ElectroScrapTrend from "@/views/chart/ElectroScrapTrend.vue";
import ElectroSurfaceCopperCarousel from "@/views/chart/Electro​SurfaceCopperCarousel.vue";
import ElectroDefectPieChart from "@/views/chart/ElectroDefectPieChart.vue";
import ElectroKeyParamsContro from "@/views/chart/ElectroKeyParamsContro.vue";
import ElectroMaintenance from "@/views/chart/ElectroMaintenance.vue";
import ElectroDeviceAlarm from "@/views/chart/ElectroDeviceAlarm.vue";
import ElectroHoleCopperCarousel from "@/views/chart/ElectroHoleCopperCarousel.vue";

const attendanceLastRefreshTime = ref("");
const alarmLastRefreshTime = ref("");

const handleRefreshTimeUpdated = (lastRefreshTime: string) => {
  attendanceLastRefreshTime.value = lastRefreshTime;
};
const handleAlarmRefreshTimeUpdated = (lastRefreshTime: string) => {
  alarmLastRefreshTime.value = lastRefreshTime;
};

const devices = [
  { name: "VCP1#", status: 1 },
  { name: "日蚀1#", status: 2 },
  { name: "VCP2#", status: 3 },
  { name: "日蚀2#", status: 3 },
  { name: "电镀后处理", status: 1 },
];
</script>

<style scoped lang="scss">
.electro-main-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem; // 行间距
  // 分三行
  > div {
    flex: 1;
  }
  // 第一行
  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 0.2rem; // 行间距
    > div {
      flex: 1;
    }
  }
  // 第二行
  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    gap: 0.2rem; // 行间距
    > div {
      flex: 1;
    }
  }

  // 第三行
  > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 0.2rem; // 行间距
    > div {
      flex: 1;
    }
    > div:nth-child(4) {
      .devices-container {
        height: calc(100% - 0.34rem);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        font-size: 0.2rem;
        padding: 0.1rem;

        > div {
          display: inline-flex;
          align-items: center;
        }
      }
    }
  }
}
.status-item {
  display: inline-flex;
  align-items: center;
  // margin: 0 0.2rem;
  color: white; /* 文字设为白色以提高对比度 */
  margin-right: 0.15rem;
}
.status-light {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  // margin-right: 0.1rem;
  border-radius: 0.03rem;
  border: 0.03rem solid rgba(255, 255, 255, 0.5); /* 半透明白色边框 */
}
/* 开机 - 蓝色闪烁 */
.booting {
  background-color: #00f;
  //   animation: blink 0.8s infinite;
}

/* 运行 - 绿色常亮 */
.running {
  background-color: #0f0;
}

/* 保养 - 黄色常亮 */
.maintenance {
  background-color: #ff0;
}

/* 关机 - 红色常亮 */
.shutdown {
  background-color: #f00;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
