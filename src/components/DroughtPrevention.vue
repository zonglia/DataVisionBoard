<template>
  <div class="drought-prevention-container">
    <div class="drought-prevention-title">
      <Title title="N2工厂智能化数字化管控" process="防焊、文字" />
    </div>

    <div class="drought-prevention-main">
      <!-- 第一行 -->
      <div>
        <!-- 人员出勤 -->
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="users" color="#409eff" />人员出勤
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <DroughtAttendance />
            </div>
          </dv-border-box12>
        </div>
        <!-- 工序产出 -->
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div>
              <dv-decoration7 style="height: 0.37rem"
                ><SvgIcon
                  name="output"
                  color="#409eff"
                />工序产出</dv-decoration7
              >
            </div>

            <div
              style="
                flex: 1;
                height: calc(100% - 0.47rem);
                position: relative;
                display: flex;
                flex-direction: row;
              "
            >
              <DroughtProcessOutputBar />
              <DroughtMonthlyOutput /></div
          ></dv-border-box12>
        </div>
        <!-- 工序WIP -->
        <div>
          <dv-border-box12
            style="
              padding: 0.078rem;
              padding-bottom: 0;
              box-sizing: border-box;
     
            "
          >
            <div>
              <dv-decoration7 style="height: 0.37rem"
                ><SvgIcon name="wip" color="#409eff" />工序WIP
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.448rem); position: relative"
            >
              <DroughtWipRecords style="height: 100%" />
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
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="scrap" color="#409eff" />防焊总报废
              </dv-decoration7>
            </div>
            <div style="height: calc(100% - 0.37rem)">
              <C1ProductionRate />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="scrap" color="#409eff" />文字总报废
              </dv-decoration7>
            </div>
            <div style="height: calc(100% - 0.37rem)">
              <C1ProductionRate />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="ctrol" color="#409eff" />防焊CPK管控
              </dv-decoration7>
            </div>
            <div
              style="flex: 1; height: calc(100% - 0.48rem); position: relative"
            >
              <DroughtCarousel />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; box-sizing: border-box; padding-bottom: 0"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="setting" color="#409eff" />重要参数管控
              </dv-decoration7>
            </div>

            <div style="height: calc(100% - 0.448rem)">
              <DroughtKeyParamsContro style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
      </div>
      <!-- 第三行 -->
      <div>
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div style="display: flex; flex-direction: column; height: 100%">
              <dv-decoration7
                style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
              >
                <SvgIcon name="scrap" color="#409eff" />防焊不良分析
              </dv-decoration7>
              <div
                style="
                  flex: 1;
                  height: calc(100% - 0.47rem);
                  position: relative;
                  display: flex;
                  flex-direction: row;
                "
              >
                <div style="flex: 1"><DroughtDefectPieChart /></div>
              </div>
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div style="display: flex; flex-direction: column; height: 100%">
              <dv-decoration7
                style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
              >
                <SvgIcon name="scrap" color="#409eff" />文字不良分析
              </dv-decoration7>
              <div
                style="
                  flex: 1;
                  height: calc(100% - 0.47rem);
                  position: relative;
                  display: flex;
                  flex-direction: row;
                "
              >
                <div style="flex: 1"><DroughtCharacterScrapPieChart /></div>
              </div>
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12 style="padding: 0.1rem; box-sizing: border-box">
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="ctrol" color="#409eff" />灯珠管控
              </dv-decoration7>
            </div>
            <div
              style="
                flex: 1;
                height: calc(100% - 0.47rem);
                display: flex;
                flex-direction: row;
                column-gap: 0.1rem;
              "
            >
              <div style="flex: 1"><DroughtBeadControl /></div>

              <div style="flex: 1"><DroughtBeadControl02 /></div>
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.1rem; padding-bottom: 0; box-sizing: border-box"
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

import DroughtAttendance from "../views/chart/DroughtAttendance.vue";
import DroughtMonthlyOutput from "../views/chart/DroughtMonthlyOutput.vue";
import DroughtProcessOutputBar from "../views/chart/DroughtProcessOutputBar.vue";
import DroughtWipRecords from "../views/chart/DroughtWipRecords.vue";
import C1ProductionRate from "@/views/chart/C1ProductionRate.vue";
import DroughtDefectPieChart from "../views/chart/DroughtDefectPieChart.vue";
import DroughtCharacterScrapPieChart from "../views/chart/DroughtCharacterScrapPieChart.vue";
import DroughtKeyParamsContro from "../views/chart/DroughtKeyParamsContro.vue";
import DroughtCarousel from "../views/chart/DroughtCarousel.vue";
import DroughtBeadControl from "../views/chart/DroughtBeadControl.vue";
import DroughtBeadControl02 from "../views/chart/DroughtBeadControl02.vue";
import DroughtScrapRate from "../views/chart/DroughtScrapRate.vue";
import DroughtScrapRateBarAndLine from "../views/chart/DroughtScrapRateBarAndLine.vue";
import DroughtCharacterScrapRate from "../views/chart/DroughtCharacterScrapRate.vue";
import DroughCharactertScrapRateBarAndLine from "../views/chart/DroughCharactertScrapRateBarAndLine.vue";
import DroughtMaintenance from "../views/chart/DroughtMaintenance.vue";
import DroughtDustFallStats from "../views/chart/DroughtDustFallStats.vue";
import DroughtHumidity from "../views/chart/DroughtHumidity.vue";

const attendanceLastRefreshTime = ref("");
// 状态配置映射
const statusConfig = [
  { class: "booting", text: "开机", color: "#00f" }, // 状态0
  { class: "running", text: "运行", color: "#0f0" }, // 状态1
  { class: "maintenance", text: "保养", color: "#ff0" }, // 状态2
  { class: "shutdown", text: "关机", color: "#f00" }, // 状态3
];
const devices = [
  { name: "1#前处理", status: 0 }, // 开机
  { name: "2#前处理", status: 1 }, // 运行
  { name: "1#丝印机", status: 1 },
  { name: "2#丝印机", status: 1 },
  { name: "3#丝印机", status: 1 },
  { name: "4#丝印机", status: 0 },
  { name: "1#曝光机", status: 0 },
  { name: "2#曝光机", status: 1 },
  { name: "3#曝光机", status: 0 },
  { name: "1#显影机", status: 0 },
  { name: "2#显影机", status: 1 },

  { name: "1#文字机", status: 1 },
  { name: "2#文字机", status: 0 },
  { name: "3#文字机", status: 0 },
  { name: "4#文字机", status: 0 },
  { name: "5#文字机", status: 3 },
  { name: "6#文字机", status: 0 },

  { name: "1#防焊烤箱", status: 3 },
  { name: "2#防焊烤箱", status: 0 },
  { name: "3#防焊烤箱", status: 1 },
  { name: "4#防焊烤箱", status: 0 },
];
</script>

<style scoped lang="scss">
.drought-prevention-container {
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
    flex-direction: column;
    padding: 0.5rem;
    padding-top: 0;
    // gap: 0.2rem; // 行间距
    box-sizing: border-box;
    gap: 0.2rem; // 行间距
    > div {
      height: 100%;
      flex: 1; //三行
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
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          font-size: 0.15rem;
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
  display: inline-flex;
  align-items: center;
  // margin: 0 0.2rem;
  color: white; /* 文字设为白色以提高对比度 */
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
