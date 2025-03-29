<template>
  <div class="bbt-avi-container">
    <div class="bbt-avi-title">
      <Title title="BBT AVI 包装 车间智能化电子化管控" />
    </div>
    <div class="bbt-avi-main-container">
      <div>
        <!-- 电测良率统计 -->
        <div>
          <!-- 标题 -->
          <div>
            <dv-decoration7 style="width: 3rem; height: 0.5rem">
              <div color-white font-300>电测良率统计</div>
            </dv-decoration7>
          </div>
          <div>
            <div>
              <BbtElectroYieldRecords />
            </div>
            <div>
              <span>投入数</span>

              <span>300</span>

              <span>合格数</span>

              <span>298</span>

              <span>合格率</span>

              <span> 99.3%</span>
            </div>
          </div>
        </div>
        <!-- AVI良率 -->
        <div>
          <!-- 标题 -->
          <div>
            <dv-decoration7 style="width: 3rem; height: 0.5rem">
              <div color-white font-300>AVI良率统计</div>
            </dv-decoration7>
          </div>

          <div>
            <div>
              <BbtElectroYieldRecords />
            </div>

            <div>
              <span>投入数</span>

              <span>300</span>

              <span>合格数</span>

              <span>298</span>

              <span>合格率</span>

              <span>99.3%</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <dv-decoration7 style="width: 3rem; height: 0.5rem">
              <div color-white font-300>车间温湿度管控</div>
            </dv-decoration7>
          </div>
          <div>
            <BbtTempeRecords />
          </div>
        </div>
        <div>
          <div>
            <dv-decoration7 style="width: 3rem; height: 0.5rem">
              <div color-white font-300>设备保养计划</div>
            </dv-decoration7>
          </div>
          <div>
            <BbtMachineMaintenance />
          </div>
        </div>
        <div>
          <ElectroTestRateStatistics />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ElectroTestRateStatistics from "../views/chart/ElectroTestRateStatistics.vue";
import BbtTempeRecords from "../views/chart/BbtTempeRecords.vue";
import BbtMachineMaintenance from "../views/chart/BbtMachineMaintenance.vue";
import BbtElectroYieldRecords from "../views/chart/BbtElectroYieldRecords.vue";
</script>

<style scoped lang="scss">
.bbt-avi-container {
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
  .bbt-avi-main-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1.3fr 1fr;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    row-gap: 0.25rem;
    padding: 0.25rem;
    padding-left: 0.5rem;
    > div:nth-child(1) {
      display: flex;
      column-gap: 20px;
      > div {
        flex: 1; // 等宽分列
        min-width: 0; // 防止内容溢出
      }
      // 电测良率统计 轮播表模块
      > div:nth-child(1) {
        border-radius: 0.125rem;
        border: 0.05rem solid #ffc000;
        display: flex;
        flex-direction: column; // 垂直排列
        // 电测良率标题
        > div:nth-child(1) {
          font-size: 0.25rem;
          margin: 0 auto;
        }

        > div:nth-child(2) {
          display: flex;
          width: 100%;
          height: 100%;
          // 电测良率的表格
          > div:nth-child(1) {
            flex: 9;
            width: 100%;
            height: 100%;
          }
          > div:nth-child(2) {
            flex: 1;
            display: flex;
            flex-direction: column;

            span {
              font-size: 0.2rem;
              color: red;
              flex: 1;
              display: flex; // 关键：将span转为弹性容器
              align-items: center; // 垂直居中
              justify-content: center; // 水平居中
            }
          }
        }
      }
      // AVI良率模块
      > div:nth-child(2) {
        border-radius: 0.125rem;
        border: 0.05rem solid #ffc000;
        display: flex;
        flex-direction: column; // 垂直排列
        // AVI良率标题
        > div:nth-child(1) {
          font-size: 0.25rem;
          margin: 0 auto;
        }
        > div:nth-child(2) {
          display: flex;
          width: 100%;
          height: 100%;
          // background-color: brown;
          // AVI良率的表格
          > div:nth-child(1) {
            flex: 9;
          }

          > div:nth-child(2) {
            flex: 1;
            display: flex;
            flex-direction: column;
            // background-color: aqua;

            span {
              font-size: 0.2rem;
              color: red;
              flex: 1;
              display: flex; // 关键：将span转为弹性容器
              align-items: center; // 垂直居中
              justify-content: center; // 水平居中
            }
          }
        }
      }
    }
    > div:nth-child(2) {
      display: flex;
      column-gap: 0.25rem;
      > div {
        flex: 1;
      }
      // 车间温湿度管控
      > div:nth-child(1) {
        border-radius: 0.125rem;
        border: 0.05rem solid #ffc000;
        display: flex;
        flex-direction: column; // 垂直排列
        > div:nth-child(1) {
          margin: 0 auto;
          // background-color: black;
        }
        > div:nth-child(2) {
        }
      }
      // 设备保养计划
      > div:nth-child(2) {
        border-radius: 0.125rem;
        border: 0.05rem solid #ffc000;
        display: flex;
        flex-direction: column; // 垂直排列

        > div:nth-child(1) {
          margin: 0 auto;
          // background-color: black;
        }
      }
      // BBT AVI 良率曲线
      > div:nth-child(3) {
      }
    }
  }
}
</style>
