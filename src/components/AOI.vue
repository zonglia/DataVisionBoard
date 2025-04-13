<template>
  <div class="aoi-container">
    <div class="aoi-title">
      <Title title="N2工厂智能化数字化管控" process="外层 AOI" />
    </div>

    <div class="aoi-main-container">
      <!-- 第一行 -->
      <div>
        <!-- 人员出勤 -->
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box "
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
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.7rem - 0.078rem)">
              <AOIAttendance @refresh-time-updated="handleRefreshTimeUpdated" />
            </div>
          </dv-border-box12>
        </div>
        <!-- 工序产出 -->
        <div>
          <dv-border-box12 style="padding: 0.07rem; box-sizing: border-box">
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="output" color="#409eff" />工序产出
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div
              style="
                flex: 1;
                height: calc(100% - 0.7rem - 0.07rem);
                position: relative;
                display: flex;
                flex-direction: row;
              "
            >
              <AOIProcessOutputBar />
              <AOIMonthlyOutput /></div
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
                <span style="font-size: 0.15rem"
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
              <AOIWipRecords style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
      </div>
      <!-- 第二行 -->
      <div>
        <div>
          <dv-border-box12
            style="padding: 0.07rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="scrap" color="#409eff" />外层报废率和报废分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="height: calc(100% - 0.07rem - 0.7rem)">
              <AOIScrapRate />
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
                  <SvgIcon name="scrap" color="#409eff" />AOI良率统计和不良分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="height: calc(100% - 0.07rem - 0.7rem)">
              <AOIAVIYieldRate />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="ctrol" color="#409eff" />CPK管控
              </dv-decoration7>
            </div>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <AOICPKCarousel />
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
                  <SvgIcon name="setting" color="#409eff" />重要参数管控
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
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
              <AOIKeyParamsContro style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
      </div>
      <!-- 第三行 -->
      <div>
        <div>
          <dv-border-box12 style="padding: 0.07rem; box-sizing: border-box">
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="scrap" color="#409eff" />外层不良分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.07rem - 0.7rem)">
              <AOIDefectPieChart />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12 style="padding: 0.07rem; box-sizing: border-box">
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="scrap" color="#409eff" />AOI不良分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.15rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.07rem - 0.7rem)">
              <AOICharacterScrapPieChart /></div
          ></dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.2rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="ctrol" color="#409eff" />灯珠尺寸管控
              </dv-decoration7>
            </div>
            <div
              style="
                height: calc(100% - 0.47rem);
                display: flex;
                flex-direction: row;
                gap: 0.1rem;
              "
            >
              <div
                style="
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  font-size: 0.18rem;
                "
              >
                <span>灯珠间距要求</span>
                <span
                  style="font-size: 0.13rem; margin-top: 0.1rem; color: yellow"
                  >0.079-0.107(mm)</span
                >
              </div>
              <div style="flex: 1"><AOIBeadCarousel01 /></div>
              <div style="flex: 1"><AOIBeadCarousel02 /></div>

              <!-- <AOIBeadCarousel /> -->
            </div>
          </dv-border-box12>
        </div>
        <!-- 设备状态 -->
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AOIAttendance from "../views/chart/AOIAttendance.vue";
import AOIMonthlyOutput from "../views/chart/AOIMonthlyOutput.vue";
import AOIProcessOutputBar from "../views/chart/AOIProcessOutputBar.vue";
import AOIWipRecords from "../views/chart/AOIWipRecords.vue";
import AOICPKCarousel from "../views/chart/AOICPKCarousel.vue";
import AOIBeadCarousel01 from "../views/chart/AOIBeadCarousel01.vue";
import AOIBeadCarousel02 from "../views/chart/AOIBeadCarousel02.vue";
import AOIAVIYieldRate from "@/views/chart/AOIAVIYieldRate.vue";

import AOIDefectPieChart from "../views/chart/AOIDefectPieChart.vue";
import AOICharacterScrapPieChart from "../views/chart/AOICharacterScrapPieChart.vue";
import AOIKeyParamsContro from "../views/chart/AOIKeyParamsContro.vue";
import AOIScrapRate from "../views/chart/AOIScrapRate.vue";

const attendanceLastRefreshTime = ref("");

const handleRefreshTimeUpdated = (lastRefreshTime: string) => {
  attendanceLastRefreshTime.value = lastRefreshTime;
};
const devices = [
  { name: "1#前处理", status: 3 },
  { name: "2#前处理", status: 1 },

  { name: "1#压膜机", status: 3 },
  { name: "2#压膜机", status: 1 },

  { name: "1#半自动曝光机", status: 3 },
  { name: "2#半自动曝光机", status: 3 },

  { name: "1#LDI", status: 1 },

  { name: "1#蚀刻机", status: 1 },
  { name: "2#蚀刻机", status: 3 },

  { name: "1#AOI机", status: 1 },
  { name: "2#AOI机", status: 1 },
  { name: "3#AOI机", status: 1 },

  { name: "1#VRS", status: 1 },
  { name: "2#VRS", status: 1 },
  { name: "3#VRS", status: 1 },
];
</script>

<style scoped lang="scss">
.aoi-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
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
  > div:nth-child(1) {
    flex: 2;
  }
  > div:nth-child(2) {
    flex: 8;
    padding: 0.5rem;
    padding-top: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.2rem; // 行间距
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
        height: 100%;
        flex: 1;
      }
      > div:nth-child(4) {
        .devices-container {
          height: calc(100% - 0.34rem);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);

          padding: 0.1rem;
          padding-top: 0;
          > div {
            display: inline-flex;
            align-items: center;
          }
        }
      }
    }
  }
}
.status-item {
  font-size: 0.18rem;
  display: inline-flex;
  align-items: center;
  color: white; /* 文字设为白色以提高对比度 */
}
.status-light {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  margin-right: 0.1rem;
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
