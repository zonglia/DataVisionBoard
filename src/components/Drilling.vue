<template>
  <div class="drilling-container">
    <div class="drilling-title">
      <Title title="钻孔、成型车间智能管理看板" />
    </div>
    <div class="drilling-main-container">
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              C1钻孔总报废
            </dv-decoration7>
          </div>
          <div style="height: 2rem">
            <C1ProductionRate />
          </div>
          <div style="height: calc(100% - 0.37rem - 2rem)">
            <C1ScrapAreaRate />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12 style="padding: 0.1rem; box-sizing: border-box">
          <Carousel :imgList="imgList" />
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              钻孔设备保养周期记录
            </dv-decoration7>
          </div>

          <div
            style="flex: 1; height: calc(100% - 0.45rem); position: relative"
          >
            <DrillingMaintenance style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div style="height: 0.37rem">
            <dv-decoration7 style="height: 100%">
              钻机Run-out测量记录(<20um)
            </dv-decoration7>
          </div>

          <div style="flex: 1; height: 2.6rem; position: relative">
            <DrillingMachineRecords style="height: 100%" />
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
            style="height: calc(100% - 0.37rem - 0.2rem - 2.6rem)"
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
      <!-- 第二行 -->
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              成型总报废
            </dv-decoration7>
          </div>
          <div style="height: 2rem">
            <ProductionRate />
          </div>
          <div style="height: calc(100% - 0.37rem - 2rem)">
            <ScrapAreaRate />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12 style="padding: 0.1rem; box-sizing: border-box">
          <DrillingCpkCarousel />
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              成型设备保养周期记录
            </dv-decoration7>
          </div>

          <div
            style="flex: 1; height: calc(100% - 0.45rem); position: relative"
          >
            <DrillingMaintenance style="height: 100%" />
          </div>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12
          style="padding: 0.078rem; padding-bottom: 0; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="height: 0.37rem">
              成型机Run-out测量记录(<20um)
            </dv-decoration7>
          </div>

          <div style="flex: 1; height: 2.3rem; position: relative">
            <FormingMachineRecords style="height: 100%" />
          </div>
          <div
            style="
              height: 0.25rem;
              font-size: 0.2rem;
              text-align: center;
              background-color: red;
            "
          >
            成型温湿度显示
          </div>

          <div
            class="tempeScale"
            style="height: calc(100% - 0.37rem - 0.2rem - 2.3rem)"
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
          <!-- <div style="height: 0.2rem; font-size: 0.15rem">
            <dv-decoration7 style="height: 100%">
              钻孔温湿度显示(<20um)
            </dv-decoration7>
          </div>
          <div
            style="
              flex: 1;
              height: calc(100% - 0.37rem - 0.2rem - 2.3rem);
              position: relative;
            "
          >
            <DrillingTempe style="height: 100%" />
          </div> -->
        </dv-border-box12>
      </div>
    </div>
  </div>
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
import DrillingTempe from "@/views/chart/DrillingTempe.vue";

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
    flex: 1.5;
  }
  //   内容容器
  > div:nth-child(2) {
    height: 100%;
    flex: 8.5;
    padding: 0.5rem;
    gap: 0.2rem; // 行间距// 增加内边距
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    > div {
    }
    > div:nth-child(4) {
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
