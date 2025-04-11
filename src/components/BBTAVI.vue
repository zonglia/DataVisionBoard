<template>
  <div class="bbt-avi-container">
    <div class="bbt-avi-title">
      <Title title="N2工厂智能化数字化管控" process="BBT AVI 包装" />
    </div>
    <div class="bbt-avi-main-container">
      <!-- 第一行 -->
      <div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
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
              <BbtAttendance @refresh-time-updated="handleRefreshTimeUpdated" />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="output" color="#409eff" />工序出数
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
                display: flex;
                flex-direction: row;
              "
            >
              <BbtProcessOutputBar />
              <BbtMonthlyOutput />
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
                  <SvgIcon name="wip" color="#409eff" />工序WIP
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.07rem - 0.7rem);padding-bottom: 0;">
              <BbtWipRecords style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
      </div>
      <!-- 第二行 -->
      <div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="yield" color="#409eff" />BBT良率统计
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.8rem)">
              <BBTYield />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="yield" color="#409eff" />AVI良率统计
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.8rem)">
              <BbtAviYieldRate />
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
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.07rem - 0.7rem);padding-bottom: 0;">
              <BbtKeyParamsContro style="height: 100%" />
            </div>
          </dv-border-box12>
        </div>
      </div>
      <!-- 第三行 -->
      <div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="scrap" color="#409eff" />BBT不良分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.8rem)">
              <BBTDefectPieChart />
            </div>
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="padding: 0.08rem; padding-bottom: 0; box-sizing: border-box"
          >
            <!-- 标题＋刷新时间 -->
            <div style="height: 0.7rem">
              <!-- 标题 -->
              <div>
                <dv-decoration7 style="height: 0.4rem">
                  <SvgIcon name="scrap" color="#409eff" />AVI不良分析
                </dv-decoration7>
              </div>

              <div style="height: 0.3rem; text-align: right">
                <span style="font-size: 0.18rem"
                  >最后刷新{{ attendanceLastRefreshTime }}</span
                >
              </div>
            </div>

            <div style="flex: 1; height: calc(100% - 0.8rem)">
              <BBTAVIDefectPieChart />
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BBTYield from "../views/chart/BBTYield.vue";
import BBTDefectPieChart from "../views/chart/BBTDefectPieChart.vue";
import BbtProcessOutputBar from "../views/chart/BbtProcessOutputBar.vue";
import BbtWipRecords from "../views/chart/BbtWipRecords.vue";
import BbtKeyParamsContro from "../views/chart/BbtKeyParamsContro.vue";
import BbtMonthlyOutput from "../views/chart/BbtMonthlyOutput.vue";
import BbtAttendance from "../views/chart/BbtAttendance.vue";
import BbtAviYieldRate from "../views/chart/BbtAviYieldRate.vue";
import BBTAVIDefectPieChart from "../views/chart/BBTAVIDefectPieChart.vue";

const attendanceLastRefreshTime = ref("");

const handleRefreshTimeUpdated = (lastRefreshTime: string) => {
  attendanceLastRefreshTime.value = lastRefreshTime;
};
// 状态配置映射
const statusConfig = [
  { class: "booting", text: "开机", color: "#00f" }, // 状态0
  { class: "running", text: "运行", color: "#0f0" }, // 状态1
  { class: "maintenance", text: "保养", color: "#ff0" }, // 状态2
  { class: "shutdown", text: "关机", color: "#f00" }, // 状态3
];
const devices = [
  { name: "1#测试机", status: 1 },
  { name: "2#测试机", status: 1 },
  { name: "3#测试机", status: 3 },
  { name: "4#测试机", status: 3 },
  { name: "5#测试机", status: 3 },
  { name: "6#测试机", status: 3 },
  { name: "7#测试机", status: 3 },
  { name: "8#测试机", status: 3 },

  { name: "1#飞针机", status: 1 },
  { name: "2#飞针机", status: 3 },
  { name: "3#飞针机", status: 3 },
  { name: "4#飞针机", status: 3 },
  { name: "5#飞针机", status: 3 },

  { name: "1#OSP线", status: 1 },
  { name: "2#OSP线", status: 3 },

  { name: "1#AVI机", status: 1 },
  { name: "2#AVI机", status: 3 },

  { name: "1#VRS", status: 1 },
  { name: "2#VRS", status: 1 },
  { name: "3#VRS", status: 1 },
  { name: "4#VRS", status: 1 },
  { name: "5#VRS", status: 3 },
  { name: "6#VRS", status: 3 },

  { name: "包装机", status: 1 },
  { name: "粘尘机", status: 1 },
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
      gap: 0.2rem; // 容器间距
      > div {
        flex: 1;
      }
    }
    // 第二行
    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 0.2rem; // 容器间距
      > div {
        flex: 1;
      }
    }
    // 第三行
    > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      gap: 0.2rem; // 容器间距

      > div {
        height: 100%;
        flex: 1;
      }
      > div:nth-child(3) {
        .devices-container {
          height: calc(100% - 0.34rem);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          font-size: 0.18rem;
          padding: 0.1rem;
          // > div:nth-child(1) {
          //   background-color: #00f;
          // }
        }
      }
    }
  }
}

.status-item {
  font-size: 0.2rem;
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
