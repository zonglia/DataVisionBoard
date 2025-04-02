<template>
  <div class="bbt-avi-container">
    <div class="bbt-avi-title">
      <Title title="BBT AVI 包装 车间智能化数字化管控" />
    </div>
    <div class="bbt-avi-main-container">
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
      <div>
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div style="display: flex; flex-direction: column; height: 100%">
              <dv-decoration7
                style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
              >
                BBT良率统计
              </dv-decoration7>
              <div
                style="
                  flex: 1;
                  height: calc(100% - 0.47rem);
                  position: relative;
                "
              >
                <ElectroTestRateStatistics />
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
                AVI良率统计
              </dv-decoration7>
              <div
                style="
                  flex: 1;
                  height: calc(100% - 0.47rem);
                  position: relative;
                "
              >
                <BbtAviYieldRate />
              </div>
            </div>
          </dv-border-box12>
        </div>
      </div>
      <div>
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
        <div>
          <dv-border-box12
            style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="height: 0.37rem"> 设备状态 </dv-decoration7>
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
        <div>
          <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
            <div style="display: flex; flex-direction: column; height: 100%">
              <dv-decoration7
                style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
              >
                BBT AVI 不良分析
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
                <div style="flex: 1"><BBTDefectPieChart /></div>
                <div style="flex: 1"><BBTAVIDefectPieChart /></div>
              </div>
            </div>
          </dv-border-box12>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ElectroTestRateStatistics from "../views/chart/ElectroTestRateStatistics.vue";
import BBTDefectPieChart from "../views/chart/BBTDefectPieChart.vue";
import BbtProcessOutputBar from "../views/chart/BbtProcessOutputBar.vue";
import BbtWipRecords from "../views/chart/BbtWipRecords.vue";
import BbtKeyParamsContro from "../views/chart/BbtKeyParamsContro.vue";
import BbtMonthlyOutput from "../views/chart/BbtMonthlyOutput.vue";
import BbtAttendance from "../views/chart/BbtAttendance.vue";
import BbtAviYieldRate from "../views/chart/BbtAviYieldRate.vue";
import BBTAVIDefectPieChart from "../views/chart/BBTAVIDefectPieChart.vue";
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
// 获取状态文字
const getStatusText = (status: number) =>
  statusConfig[status]?.text || "未知状态";
const getStatusClass = (status: number) => {
  return {
    "status-booting": status === 0,
    "status-running": status === 1,
    "status-maintenance": status === 2,
    "status-shutdown": status === 3,
  };
};
</script>

<style scoped lang="scss">
.bbt-avi-container {
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
    gap: 0.2rem; // 行间距// 增加内边距
    box-sizing: border-box;

    > div {
      height: 100%;
      flex: 1; //三行
    }
    // 第一行
    > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      > div {
        flex: 2;
      }
      > div:nth-child(1) {
        flex: 1;
      }
    }
    // 第二行
    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      > div {
        flex: 1;
      }
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: row;

      > div {
        height: 100%;
        flex: 1;
      }
      > div:nth-child(2) {
        .devices-container {
          height: calc(100% - 0.34rem);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(4, 1fr);
          font-size: 0.18rem;
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
