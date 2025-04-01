<template>
  <div class="aoi-container">
    <div class="aoi-title">
      <Title title="AOI智能化电子化管控" />
    </div>

    <div class="aoi-main-container">
      <div>
        <div><AOIScrapAnalysis /></div>
        <div><AOIScrapAreaRate /></div>
      </div>
      <div>
        <img
          style="
            width: 100%; /* 宽度填满容器 */
            height: 5.2rem;
            object-fit: cover;
          "
          :src="imgSrc"
        />
      </div>
      <div>
        <img
          style="
            width: 100%; /* 宽度填满容器 */
            height: 5.2rem;
            object-fit: cover;
          "
          :src="imgSrc2"
        />
      </div>
      <div >

          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>线路AOI设备保养周期记录</div>
            </dv-decoration7>
          </div>
          <div>
            <AOIMaintenance />
          </div>

      </div>
      <!-- 白油板统计 -->
      <div>
        <!-- 标题 -->
        <div>
          <dv-decoration7 style="width: 3rem; height: 0.5rem">
            <div color-white font-300>AOI白油板统计</div>
          </dv-decoration7>
        </div>
        <div>
          <div>
            <AOIWhiteOilBoard />
          </div>
        </div>
      </div>
      <div><AOIYieldTrend /></div>
      <div><AOIScrapBarAndLine /></div>
      <div>
        <div>
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
        </div>
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
  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    flex: 9;
  }
  .aoi-main-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    box-sizing: border-box; // 使 padding 包含在设定高度内
    padding: 0.3rem;
    column-gap: 0.3rem;
    row-gap: 0.3rem;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      > div {
        flex: 1;
        width: 100%;
        height: 100%;
      }
      > div:nth-child(1) {
        height: 100%;
      }
      > div:nth-child(2) {
      }
    }
    > div:nth-child(3) {
    }
    > div:nth-child(4) {
      display: flex;
      flex-direction: column;
      > div:nth-child(1) {
        margin: 0 auto;
      }
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
      display: flex;
      flex-direction: column;
      > div:nth-child(1) {
        flex: 3;
        display: flex;
        flex-direction: column;
        > div:nth-child(1) {
          margin: 0 auto;
        }
      }
      > div:nth-child(2) {
        flex: 1;
      }
    }
  }
}
</style>
