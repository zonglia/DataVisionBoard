<template>
  <div class="drought-prevention-container">
    <div class="drought-prevention-title">
      <Title title="防焊文字车间智能化数字化管控" />
    </div>

    <div class="drought-prevention-main">
      <!-- 防焊总报废率 -->
      <div>
        <div>
          <dv-decoration7 style="width: 2.5rem; height: 30px">
            <div color-white font-300>防焊总报废率</div>
          </dv-decoration7>
        </div>
        <div><DroughtScrapRate /></div>
        <div><DroughtScrapRateBarAndLine /></div>
      </div>
      <div>
        <img
          style="
            width: 100%; /* 宽度填满容器 */
            height: 5.5rem;
            object-fit: contain;
          "
          :src="imgSrc"
        />
      </div>
      <div><DroughtCarousel /></div>
      <!-- 文字总报废率 -->
      <div>
        <div>
          <dv-decoration7 style="width: 2.5rem; height: 30px">
            <div color-white font-300>文字总报废率</div>
          </dv-decoration7>
        </div>
        <div><DroughtCharacterScrapRate /></div>
        <div><DroughCharactertScrapRateBarAndLine /></div>
      </div>
      <div>
        <div>
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>防焊文字设备保养周期记录</div>
            </dv-decoration7>
          </div>
          <div>
            <DroughtMaintenance />
          </div>
        </div>
        <div>
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>防焊无尘室落尘量记录</div>
            </dv-decoration7>
          </div>
          <div>
            <DroughtDustFallStats />
          </div>
        </div>
      </div>
      <div>
        <div>
          <dv-decoration7 style="width: 3.5rem; height: 30px">
            <div color-white font-300>车间温湿度管控</div>
          </dv-decoration7>
        </div>
        <div>
          <DroughtHumidity />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DroughtCarousel from "../views/chart/DroughtCarousel.vue";
import imgSrc from "@/assets/image/drought/05.png";
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
      > div:nth-child(1) {
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
      > div:nth-child(1) {
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
      > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        > div:nth-child(1) {
          margin: 0 auto;
        }
      }
    }
    //  车间温湿度管控
    > div:nth-child(6) {
      display: flex;
      flex-direction: column;
      > div:nth-child(1) {
        margin: 0 auto;
      }
    }
  }
}
</style>
