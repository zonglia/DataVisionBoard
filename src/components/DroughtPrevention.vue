<template>
  <div class="drought-prevention-container">
    <div class="drought-prevention-title">
      <Title title="防焊文字车间智能化数字化管控" />
    </div>

    <div class="drought-prevention-main">
      <div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                人员出勤
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <BbtAttendance />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div>
              <dv-decoration7 style="height: 0.37rem"> 工序WIP </dv-decoration7>
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
              <BbtProcessOutputBar />
              <BbtMonthlyOutput /></div
          ></dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem"> 工序WIP </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <BbtWipRecords style="height: 100%" />
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
                防焊总报废
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
                文字总报废
              </dv-decoration7>
            </div>
            <div style="height: calc(100% - 0.37rem)">
              <C1ProductionRate />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.1rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                防焊CPK管控
              </dv-decoration7>
            </div>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <DroughtCarousel />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                重要参数管控
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <BbtKeyParamsContro style="height: 100%" />
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
                防焊不良分析
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
                文字不良分析
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
          <dv-border-box12
            style="padding: 0.1rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                灯珠管控
              </dv-decoration7>
            </div>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <DroughtBeadControl />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                设备状态
              </dv-decoration7>
            </div>

            <div style="height: calc(100% - 0.47rem)">
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
import BbtAttendance from "../views/chart/BbtAttendance.vue";
import BbtMonthlyOutput from "../views/chart/BbtMonthlyOutput.vue";
import BbtProcessOutputBar from "../views/chart/BbtProcessOutputBar.vue";
import BbtWipRecords from "../views/chart/BbtWipRecords.vue";
import C1ProductionRate from "@/views/chart/C1ProductionRate.vue";
import DroughtDefectPieChart from "../views/chart/DroughtDefectPieChart.vue";
import BbtKeyParamsContro from "../views/chart/BbtKeyParamsContro.vue";
import DroughtCarousel from "../views/chart/DroughtCarousel.vue";
import DroughtBeadControl from "../views/chart/DroughtBeadControl.vue";
import imgSrc from "@/assets/image/drought/11.jpg";
import DroughtScrapRate from "../views/chart/DroughtScrapRate.vue";
import DroughtScrapRateBarAndLine from "../views/chart/DroughtScrapRateBarAndLine.vue";
import DroughtCharacterScrapRate from "../views/chart/DroughtCharacterScrapRate.vue";
import DroughCharactertScrapRateBarAndLine from "../views/chart/DroughCharactertScrapRateBarAndLine.vue";
import DroughtMaintenance from "../views/chart/DroughtMaintenance.vue";
import DroughtDustFallStats from "../views/chart/DroughtDustFallStats.vue";
import DroughtHumidity from "../views/chart/DroughtHumidity.vue";

// 状态配置映射
const statusConfig = [
  { class: "booting", text: "开机", color: "#00f" }, // 状态0
  { class: "running", text: "运行", color: "#0f0" }, // 状态1
  { class: "maintenance", text: "保养", color: "#ff0" }, // 状态2
  { class: "shutdown", text: "关机", color: "#f00" }, // 状态3
];
const devices = [
  { name: "1#压机", status: 0 }, // 开机
  { name: "2#压机", status: 1 }, // 运行
  { name: "3#压机", status: 2 }, // 保养
  { name: "4#压机", status: 3 }, // 关机
  { name: "5#压机", status: 1 },
  { name: "6#压机", status: 0 },
  { name: "7#压机", status: 3 },
  { name: "8#压机", status: 2 },
  { name: "9#压机", status: 1 },
  { name: "10#压机", status: 0 },
  { name: "11#压机", status: 2 },
  { name: "12#压机", status: 1 },
  { name: "13#压机", status: 3 },
  { name: "14#压机", status: 0 },
  { name: "15#压机", status: 1 },
  { name: "16#压机", status: 2 },
  { name: "17#压机", status: 3 },
  { name: "18#压机", status: 0 },
  { name: "19#压机", status: 1 },
  { name: "20#压机", status: 2 },
];

const imgList = ref([
  {
    url: new URL(`../assets/image/drought/07.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drought/08.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drought/09.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drought/10.png`, import.meta.url).href,
  },
]);
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
    flex: 1.5;
  }
  //   内容容器
  > div:nth-child(2) {
    height: 100%;
    flex: 8.5;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.2rem; // 行间距
    box-sizing: border-box;
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
      > div:nth-child(1) {
      }
      > div:nth-child(2) {
      }
    }
    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 0.2rem; // 行间距
      > div {
        flex: 4;
      }
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      gap: 0.2rem; // 行间距
      > div {
        flex: 4;
      }
      > div:nth-child(4) {
        .devices-container {
          height: calc(100% - 0.34rem);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(4, 1fr);
          font-size: 0.11rem;
          > div:nth-child(1) {
            // background-color: aqua;
          }
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
  margin: 0 0.2rem;
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
