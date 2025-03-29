<template>
  <dv-full-screen-container>
    <div class="drilling-container">
      <div class="drilling-title">
        <Title title="钻孔、成型车间智能管理看板" />
      </div>
      <div class="drilling-main-container">
        <div class="drilling-main">
          <div>
            <div><C1ProductionRate /></div>
            <div><C1ScrapAreaRate /></div>
          </div>
          <div>
            <Carousel :imgList="imgList" />
          </div>
          <div>
            <dv-border-box10 style="height: 5.48rem">
              <div
                style="
                  font-size: 0.25rem;
                  width: 100%;
                  text-align: center;
                  letter-spacing: 0.1rem;
                "
              >
                钻孔设备保养周期记录
              </div>
              <DrillingMaintenance
            /></dv-border-box10>
          </div>
          <div>
            <div>
              <dv-border-box10 style="height: 4.1rem">
                <div
                  style="
                    font-size: 0.25rem;
                    width: 100%;
                    text-align: center;
                    letter-spacing: 0.1rem;
                  "
                >
                  钻机Run-out测量记录(<20um)
                </div>
                <DrillingMachineRecords />
              </dv-border-box10>
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
                <el-table-column prop="workspace" label="车间">
                </el-table-column>
                <el-table-column
                  prop="stTempeHumidity"
                  label="标准温湿度"
                  min-width="100"
                >
                </el-table-column>
                <el-table-column
                  prop="actualTempe"
                  label="实际温度"
                  min-width="50"
                >
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
          <div>
            <div><ProductionRate /></div>
            <div><ScrapAreaRate /></div>
          </div>
          <div><DrillingCpkCarousel /></div>
          <div>
            <dv-border-box10 style="height: 5.48rem">
              <div
                style="
                  font-size: 0.25rem;
                  width: 100%;
                  text-align: center;
                  letter-spacing: 0.1rem;
                "
              >
                成型设备保养周期记录
              </div>
              <DrillingMaintenance />
            </dv-border-box10>
          </div>
          <div>
            <div>
              <dv-border-box10 style="height: 4.1rem">
                <div
                  style="
                    font-size: 0.23rem;
                    width: 100%;
                    text-align: center;
                    letter-spacing: 0.1rem;
                  "
                >
                  成型机Run-out测量记录(<20um)
                </div>
                <FormingMachineRecords />
              </dv-border-box10>
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
                <el-table-column prop="workspace" label="车间">
                </el-table-column>
                <el-table-column
                  prop="stTempeHumidity"
                  label="标准温湿度"
                  min-width="100"
                >
                </el-table-column>
                <el-table-column
                  prop="actualTempe"
                  label="实际温度"
                  min-width="50"
                >
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
      </div></div
  ></dv-full-screen-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductionRate from "@/views/chart/ProductionRate.vue";
import C1ProductionRate from "@/views/chart/C1ProductionRate.vue";
import ScrapAreaRate from "@/views/chart/ScrapAreaRate.vue";
import C1ScrapAreaRate from "@/views/chart/C1ScrapAreaRate.vue";
import Carousel from "./Carousel.vue";
import DrillingMaintenance from "../views/chart/DrillingMaintenance.vue";
import DrillingCpkCarousel from "../views/chart/DrillingCpkCarousel.vue";
import FormingMachineRecords from "../views/chart/FormingMachineRecords.vue";
import DrillingMachineRecords from "../views/chart/DrillingMachineRecords.vue";

const imgList = ref([
  {
    url: new URL(`../assets/image/drilling/banner1.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner2.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner3.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner4.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner5.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner6.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner7.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner8.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner9.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner10.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner11.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner12.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner13.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner14.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner15.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner16.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner17.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner18.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner19.png`, import.meta.url).href,
  },
  {
    url: new URL(`../assets/image/drilling/banner20.png`, import.meta.url).href,
  },
]);

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
  // height: "10px",
  padding: "0",
  // background: "rgba(2, 108, 202, 0.7)",
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
.drilling-container {
  width: 100%;
  height: 100%;
  background: url(../assets/image/bg5.jpg) no-repeat center;
  background-size: cover;
  display: grid;
  grid-template-rows: 1.5fr 8.5fr;
  row-gap: 0.25rem;
  box-sizing: border-box;
  min-height: 0; // 允许子项压缩
  .drilling-main-container {
    height: 100%;

    box-sizing: border-box;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.3rem;

    .drilling-main {
      // overflow: auto; // 内容溢出时出现滚动条
      height: 100%;
      display: grid;
      box-sizing: border-box;
      min-height: 0; // 允许子项压缩
      grid-template-rows: repeat(2, 1fr); // 等同于 1fr 1fr
      grid-template-columns: repeat(4, 1fr); // 等同于 1fr 1fr 1fr 1fr
      column-gap: 0.2rem;
      row-gap: 0.2rem;
      > div {
        width: 100%;
        height: 100%;
      }
      > div:nth-child(1) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        > div:nth-child(1) {
          height: 100%;
        }
      }
      > div:nth-child(3) {
        // background-color: #bfa;
      }
      > div:nth-child(4) {
        display: grid;
        grid-template-rows: 3fr 1fr;
        > div:nth-child(2) {
          height: 100%;
          background-color: red;
        }
      }
      > div:nth-child(8) {
        display: grid;
        grid-template-rows: 3fr 1fr;
        row-gap: 0;
        > div:nth-child(2) {
          height: 100%;
          background-color: yellow;
        }
      }
    }
  }
}

// :deep(.el-table__body) {
//   tr {
//     td {
//       background-color: rgba(2, 108, 202, 0.7);
//       padding: 0;
//       border-spacing: 0;
//       height: 35px;
//       color: #fff;
//       text-align: center;
//     }
//     > :nth-child(3) {
//       font-size: 0.09rem;
//     }
//   }
// }
</style>
