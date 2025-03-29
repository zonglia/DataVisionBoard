<template>
  <div class="electro-plating-container">
    <div><Title title="电镀车间智能化数字化管控" /></div>
    <div>
      <div>
        <div>
          <dv-decoration7 style="width: 2.5rem; height: 30px">
            <div color-white font-300>电镀总报废率</div>
          </dv-decoration7>
        </div>
        <div><ElectroScrapRate /></div>
        <div><ElectroScrapRateBarAndLine /></div>
      </div>
      <div>
        <div>
          <img
            style="
              width: 100%; /* 宽度填满容器 */
              height: 5.5rem;
              object-fit: contain;
            "
            :src="imgSrc1"
          />
        </div>
        <div>
          <img
            style="
              width: 100%; /* 宽度填满容器 */
              height: 5.5rem;
              object-fit: contain;
            "
            :src="imgSrc2"
          />
        </div>
        <div>
          <img
            style="
              width: 100%; /* 宽度填满容器 */
              height: 5.5rem;
              object-fit: contain;
            "
            :src="imgSrc3"
          />
        </div>
      </div>
      <div>
        <img
          style="
            width: 100%; /* 宽度填满容器 */
            height: 5.5rem;
            object-fit: contain;
          "
          :src="imgSrc4"
        />
      </div>
      <div>
        <div>
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>电镀设备保养周期记录</div>
            </dv-decoration7>
          </div>

          <div><ElectroMaintenance /></div>
        </div>
        <div>
          <div>
            <dv-decoration7 style="width: 3.5rem; height: 30px">
              <div color-white font-300>设备报警记录</div>
            </dv-decoration7>
          </div>
          <div style="font-size: .15rem;">刷新时间</div>
          <div><ElectroDeviceAlarm /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ElectroScrapRate from "../views/chart/ElectroScrapRate.vue";
import ElectroScrapRateBarAndLine from "../views/chart/ElectroScrapRateBarAndLine.vue";
import imgSrc1 from "@/assets/image/electro/01.png";
import imgSrc2 from "@/assets/image/electro/02.png";
import imgSrc3 from "@/assets/image/electro/03.png";
import imgSrc4 from "@/assets/image/electro/04.png";
import ElectroMaintenance from "../views/chart/ElectroMaintenance.vue";
import ElectroDeviceAlarm from "../views/chart/ElectroDeviceAlarm.vue";
</script>

<style scoped lang="scss">
.electro-plating-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    flex: 9;
    box-sizing: border-box; // 使 padding 包含在设定高度内
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 0.3rem;
    row-gap: 0.3rem;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      > div:nth-child(1) {
        margin: 0 auto;
      }
    }
    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      column-gap: 0.3rem;
      > div {
        flex: 1;
      }
    }
    > div:nth-child(4) {
      display: flex;
      flex-direction: row;
      column-gap: 0.3rem;
      > div {
        flex: 1;
      }
      > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        > div:nth-child(1) {
          margin: 0 auto;
        }
      }
      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        > div:nth-child(1) {
          margin: 0 auto;
        }
        > div:nth-child(2) {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
