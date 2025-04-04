<template>
  <div class="aoi-container">
    <div class="aoi-title">
      <Title title="N2工厂智能化数字化管控" process="AOI" />
    </div>

    <div class="aoi-main-container">
      <div>
        <!-- <div><AOIScrapAnalysis /></div>
        <div><AOIScrapAreaRate /></div> -->

        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              外层总报废率
            </dv-decoration7>
          </div>
          <div style="height: 2rem">
            <AOIScrapAnalysis />
          </div>
          <div style="height: calc(100% - 0.37rem - 2rem)">
            <AOIScrapAreaRate />
          </div>
        </dv-border-box12>
      </div>
      <div style="position: relative">
        <img
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
          "
          :src="imgSrc"
        />
      </div>

      <div style="position: relative">
        <!-- <img
          style="
            width: 100%; /* 宽度填满容器 */
            height: 5.2rem;
            object-fit: cover;
          "
          :src="imgSrc2"
        /> -->

        <img
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
          "
          :src="imgSrc2"
        />
      </div>

      <div>
        <!-- <div>
          <dv-decoration7 style="width: 3.5rem; height: 30px">
            <div color-white font-300>线路AOI设备保养周期记录</div>
          </dv-decoration7>
        </div>
        <div>
          <AOIMaintenance />
        </div> -->

        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              线路AOI设备保养周期记录
            </dv-decoration7>
          </div>

          <div
            style="flex: 1; height: calc(100% - 0.45rem); position: relative"
          >
            <AOIMaintenance style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <!-- 白油板统计 -->
      <div>
        <!-- 标题 -->
        <!-- <div>
          <dv-decoration7 style="width: 3rem; height: 0.5rem">
            <div color-white font-300>AOI白油板统计</div>
          </dv-decoration7>
        </div>
        <div>
        
            <AOIWhiteOilBoard />
          
        </div> -->

        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              AOI白油板统计
            </dv-decoration7>
          </div>

          <div
            style="flex: 1; height: calc(100% - 0.45rem); position: relative"
          >
            <AOIWhiteOilBoard style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <!-- <AOIYieldTrend /> -->

        <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
          <div style="display: flex; flex-direction: column; height: 100%">
            <dv-decoration7
              style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
            >
              AOI良率统计
            </dv-decoration7>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <AOIYieldTrend style="height: 100%" />
            </div>
          </div>
        </dv-border-box12>
      </div>
      <div>
        <!-- <AOIScrapBarAndLine /> -->
        <dv-border-box12 style="padding: 0.078rem; box-sizing: border-box">
          <div style="display: flex; flex-direction: column; height: 100%">
            <dv-decoration7
              style="height: 0.37rem; flex-shrink: 0; /* 防止标题被压缩 */"
            >
              AOI报废分析
            </dv-decoration7>
            <div
              style="flex: 1; height: calc(100% - 0.47rem); position: relative"
            >
              <AOIScrapBarAndLine style="height: 100%" />
            </div>
          </div>
        </dv-border-box12>
      </div>
      <div>
        <!-- <div>
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>线路无尘室落尘量统计</div>
            </dv-decoration7>
          </div>
          <div>
            <AOIDustFallStats />
          </div>
        </div>
        <div>
          <el-table
            height="1.4rem"
            :data="tableData"
            :row-style="rowStyle"
            :cell-style="cellStyle"
            :header-cell-style="headerStyle"
            stripe
          >
            <el-table-column type="index" index="2"> </el-table-column>
            <el-table-column prop="workspace" label="车间"> </el-table-column>
            <el-table-column
              prop="stTempeHumidity"
              label="标准温湿度"
              min-width="100"
            >
            </el-table-column>
            <el-table-column prop="actualTempe" label="实际温度" min-width="50">
            </el-table-column>
            <el-table-column
              prop="actualHumidity"
              label="实际湿度"
              min-width="50"
            >
            </el-table-column>
          </el-table>
        </div> -->

        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div style="height: 0.37rem">
            <dv-decoration7 style="height: 100%">
              线路无尘室落尘量统计
            </dv-decoration7>
          </div>

          <div style="flex: 1; height: 2.4rem; position: relative">
            <AOIDustFallStats style="height: 100%" />
          </div>
          <div
            style="
              height: 0.25rem;
              font-size: 0.2rem;
              text-align: center;
              background-color: red;
            "
          >
            钻孔温湿度显示
          </div>

          <div
            class="tempeScale"
            style="height: calc(100% - 0.37rem - 0.2rem - 2.4rem)"
          >
            <!-- <DrillingTempe style="height: 100%" /> -->
            <div>车间</div>
            <div>标准温湿度</div>
            <div>实际温度</div>
            <div>实际湿度</div>
            <div>线路无尘室</div>
            <div>22℃±2℃55%±5%RH</div>
            <div>22</div>
            <div>55%</div>
            <div>AOI</div>
            <div>23℃±3℃40%±20%RH</div>
            <div>22</div>
            <div>55%</div>
          </div>
        </dv-border-box12>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AOIScrapAnalysis from "@/views/chart/AOIScrapAnalysis.vue";
import AOIScrapAreaRate from "../views/chart/AOIScrapAreaRate.vue";
import imgSrc from "@/assets/image/aoi/01.png";
import imgSrc2 from "@/assets/image/aoi/02.png";
import AOIMaintenance from "../views/chart/AOIMaintenance.vue";
import AOIYieldTrend from "../views/chart/AOIYieldTrend.vue";
import AOIDustFallStats from "../views/chart/AOIDustFallStats.vue";
import AOIWhiteOilBoard from "../views/chart/AOIWhiteOilBoard.vue";
import AOIScrapBarAndLine from "../views/chart/AOIScrapBarAndLine.vue";

const tableData = ref([
  {
    workspace: "线路无尘室",
    stTempeHumidity: "22℃±2℃55%±5%RH",
    actualTempe: "22",
    actualHumidity: "55%",
  },
  {
    workspace: "AOI",
    stTempeHumidity: "23℃±3℃40%±20%RH",
    actualTempe: "22",
    actualHumidity: "55%",
  },
]);

const rowStyle = ref({
  color: "red",
  padding: "0",
});

const cellStyle = ref({
  padding: "0",
  fontSize: ".13rem",
});

const headerStyle = ref({
  background: "rgba(2, 108, 202, 0.5)",
  padding: "0",
  fontSize: "0.1rem",
  color: "#fff",
});
</script>

<style scoped lang="scss">
.aoi-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  gap: 0.5rem;
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
  }
  .aoi-main-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    box-sizing: border-box; // 使 padding 包含在设定高度内
    padding: 0.3rem;
    padding-top: 0rem;
    // column-gap: 0.3rem;
    row-gap: 0.3rem;
    > div:nth-child(1) {
      // display: flex;
      // flex-direction: column;
      // > div {
      //   flex: 1;
      //   width: 100%;
      //   height: 100%;
      // }
      > div:nth-child(1) {
        height: 100%;
      }
      > div:nth-child(2) {
      }
    }
    > div:nth-child(3) {
    }
    > div:nth-child(4) {
      // display: flex;
      // flex-direction: column;
      // > div:nth-child(1) {
      //   margin: 0 auto;
      // }
    }
    > div:nth-child(5) {
      display: flex;
      flex-direction: column;
      > div:nth-child(1) {
        margin: 0 auto;
      }
    }
    > div:nth-child(6) {
    }
    > div:nth-child(7) {
    }
    > div:nth-child(8) {
      // display: flex;
      // flex-direction: column;
      // > div:nth-child(1) {
      //   flex: 3;
      //   display: flex;
      //   flex-direction: column;
      //   > div:nth-child(1) {
      //     margin: 0 auto;
      //   }
      // }
      // > div:nth-child(2) {
      //   flex: 1;
      // }
    }
  }

  .tempeScale {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows: 2fr, 1fr, 1fr;
    font-size: 0.15rem;
    > div {
      text-align: center;
    }
    > div:nth-child(1) {
      font-size: 0.2rem;
    }
    > div:nth-child(2) {
      font-size: 0.2rem;
    }
    > div:nth-child(3) {
      font-size: 0.2rem;
    }
    > div:nth-child(4) {
      font-size: 0.2rem;
    }
  }
}
</style>
