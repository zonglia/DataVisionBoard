<template>
  <div class="drilling-container">
    <div class="drilling-title">
      <Title process="钻孔、成型" title="N2工厂智能化数字化管控" />
    </div>
    <div class="drilling-main-container">
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
              <DrillingAttendance />
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
              <DrillingProcessOutputBar />
              <DrillingMonthlyOutput /></div
          ></dv-border-box12>
        </div>
        <!-- 工序WIP -->
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem"
                ><SvgIcon name="wip" color="#409eff" />工序WIP
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.078rem - 0.37rem)"
            >
              <DrillingWipRecords style="height: 100%" />
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
                <SvgIcon name="scrap" color="#409eff" />钻孔总报废
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
                <SvgIcon name="scrap" color="#409eff" />成型总报废
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
                <SvgIcon name="ctrol" color="#409eff" />钻孔成型CPK管控
              </dv-decoration7>
            </div>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <DrillingCarousel />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="setting" color="#409eff" />重要参数管控
              </dv-decoration7>
            </div>

            <div
              style="flex: 1; height: calc(100% - 0.078rem - 0.37rem);"
            >
              <DrillingKeyParamsContro style="height: 100%" />
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
                <SvgIcon name="scrap" color="#409eff" />钻孔不良分析
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
                <div style="flex: 1"><DrillingDefectPieChart /></div>
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
                <SvgIcon name="scrap" color="#409eff" />成型不良分析
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
                <div style="flex: 1"><DrillingCharacterScrapPieChart /></div>
              </div>
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="ctrol" color="#409eff" />主轴精度管控(um)
              </dv-decoration7>
            </div>
            <div
              style="flex: 1;height: calc(100% - 0.078rem - 0.37rem); position: relative"
            >
              <DrillingSpindleAccuracy style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem">
                <SvgIcon name="status" color="#409eff" />设备状态
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
import DrillingAttendance from "../views/chart/DrillingAttendance.vue";
import DrillingMonthlyOutput from "../views/chart/DrillingMonthlyOutput.vue";
import DrillingProcessOutputBar from "../views/chart/DrillingProcessOutputBar.vue";
import DrillingWipRecords from "../views/chart/DrillingWipRecords.vue";
import DrillingCarousel from "../views/chart/DrillingCarousel.vue";
import DrillingSpindleAccuracy from "../views/chart/DrillingSpindleAccuracy.vue";
import C1ProductionRate from "@/views/chart/C1ProductionRate.vue";
import DrillingDefectPieChart from "../views/chart/DrillingDefectPieChart.vue";
import DrillingCharacterScrapPieChart from "../views/chart/DrillingCharacterScrapPieChart.vue";
import DrillingKeyParamsContro from "../views/chart/DrillingKeyParamsContro.vue";

const devices = [
  { name: "1#钻孔机", status: 0 },
  { name: "2#钻孔机", status: 0 },
  { name: "3#钻孔机", status: 0 },
  { name: "4#钻孔机", status: 0 },
  { name: "5#钻孔机", status: 0 },

  { name: "6#钻孔机", status: 1 },
  { name: "7#钻孔机", status: 1 },
  { name: "8#钻孔机", status: 1 },
  { name: "9#钻孔机", status: 1 },
  { name: "10#钻孔机", status: 1 },

  { name: "1#成型机", status: 2 },
  { name: "2#成型机", status: 2 },
  { name: "3#成型机", status: 2 },
  { name: "4#成型机", status: 2 },
  { name: "5#成型机", status: 2 },

  { name: "6#成型机", status: 3 },
  { name: "7#成型机", status: 3 },
  { name: "8#成型机", status: 3 },
  { name: "9#成型机", status: 3 },
  { name: "10#成型机", status: 3 },
];
</script>

<style scoped lang="scss">
.drilling-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  //   内容容器
  > div:nth-child(2) {
    height: 100%;
    flex: 8;
    padding: 0.5rem;
    padding-top: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.2rem; // 容器间距
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
          font-size: 0.16rem;
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
