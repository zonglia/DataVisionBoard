<template>
  <div class="drought-prevention-container">
    <div class="drought-prevention-title">
      <Title title="防焊文字车间智能化数字化管控" />
    </div>

    <div class="drought-prevention-main">
      <!-- 防焊总报废率 -->
      <div>
        <dv-border-box12
          style="height: 5.48rem; padding: 0.078rem; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="width: 2.5rem; height: 30px">
              防焊总报废率
            </dv-decoration7>
          </div>
          <DroughtScrapRate />
          <DroughtScrapRateBarAndLine />
        </dv-border-box12>
      </div>
      <div style=" position: relative">
       
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
      <div>
        <dv-border-box12 style="padding: 0.1rem; box-sizing: border-box">
          <DroughtCarousel />
        </dv-border-box12>
      </div>
      <!-- 文字总报废率 -->
      <div>
        <dv-border-box12
          style="height: 5.48rem; padding: 0.078rem; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="width: 2.5rem; height: 30px">
              文字总报废率
            </dv-decoration7>
          </div>
          <DroughtCharacterScrapRate />
          <DroughCharactertScrapRateBarAndLine
        /></dv-border-box12>
      </div>
      <div>
        <div>
          <dv-border-box12
            style="height: 5.48rem; padding: 0.078rem; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="width: 3.5rem; height: 30px">
                防焊文字设备保养周期记录
              </dv-decoration7>
            </div>

            <DroughtMaintenance />
          </dv-border-box12>
        </div>
        <div>
          <dv-border-box12
            style="height: 5.48rem; padding: 0.078rem; box-sizing: border-box"
          >
            <div>
              <dv-decoration7 style="width: 3.5rem; height: 30px">
                防焊无尘室落尘量记录
              </dv-decoration7>
            </div>

            <DroughtDustFallStats
          /></dv-border-box12>
        </div>
      </div>
      <div>
        <dv-border-box12
          style="height: 5.48rem; padding: 0.078rem; box-sizing: border-box"
        >
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              车间温湿度管控
            </dv-decoration7>
          </div>

          <DroughtHumidity />
        </dv-border-box12>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DroughtCarousel from "../views/chart/DroughtCarousel.vue";
import imgSrc from "@/assets/image/drought/06.png";
import DroughtScrapRate from "../views/chart/DroughtScrapRate.vue";
import DroughtScrapRateBarAndLine from "../views/chart/DroughtScrapRateBarAndLine.vue";
import DroughtCharacterScrapRate from "../views/chart/DroughtCharacterScrapRate.vue";
import DroughCharactertScrapRateBarAndLine from "../views/chart/DroughCharactertScrapRateBarAndLine.vue";
import DroughtMaintenance from "../views/chart/DroughtMaintenance.vue";
import DroughtDustFallStats from "../views/chart/DroughtDustFallStats.vue";
import DroughtHumidity from "../views/chart/DroughtHumidity.vue";


</script>

<style scoped lang="scss">
.drought-prevention-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box; // 使 padding 包含在设定高度内
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
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
  //   标题
  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    box-sizing: border-box; // 使 padding 包含在设定高度内
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    flex: 9;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 0.3rem;
    row-gap: 0.3rem;
    //  防焊总报废率
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      // 标题
      div:nth-child(1) {
        margin: 0 auto;
      }
    }
    > div:nth-child(2) {
    }
    > div:nth-child(3) {
    }
    //  文字总报废率
    > div:nth-child(4) {
      display: flex;
      flex-direction: column;
      // 标题
      div:nth-child(1) {
        margin: 0 auto;
      }
    }
    > div:nth-child(5) {
      display: flex;
      flex-direction: row;

      > div {
        width: 100%;
        flex: 1;
      }
      // 防焊文字设备保养周期记录
      > div {
        display: flex;
        flex-direction: column;
        // 标题居中
        div:nth-child(1) {
          margin: 0 auto;
        }
      }
    }
    //  车间温湿度管控
    > div:nth-child(6) {
      display: flex;
      flex-direction: column;
      // 标题
      div:nth-child(1) {
        margin: 0 auto;
      }
    }
  }
}
</style>
