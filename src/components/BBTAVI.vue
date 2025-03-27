<template>
  <div class="bbt-avi-container">
    <div class="bbt-avi-title">
      <Title title="BBT AVI 包装 车间智能化电子化管控" />
    </div>
    <div class="bbt-avi-main-container">
      <div>
        <div>
          <div>
            <dv-decoration7 style="width: 3rem; height: 0.5rem">
              <div color-white font-300>电测良率统计</div>
            </dv-decoration7>
          </div>
          <div>
            <div>
              <el-table
                :data="tableData"
                :row-style="rowStyle"
                show-summary
                :summary-method="getSummaries"
                stripe
                style="width: 100%; height: 100%; font-size: 0.14rem"
              >
                <el-table-column prop="date" label="生产日期">
                </el-table-column>
                <el-table-column prop="name" label="型号" width="105">
                </el-table-column>
                <el-table-column prop="address" label="投入数">
                </el-table-column>
                <el-table-column prop="address" label="一次良品数">
                </el-table-column>
                <el-table-column prop="address" label="飞针测试数">
                </el-table-column>
                <el-table-column prop="address" label="一次良率">
                </el-table-column>
                <el-table-column prop="address" label="良品数量">
                </el-table-column>
                <el-table-column prop="address" label="开路报废">
                </el-table-column>
                <el-table-column prop="address" label="短路报废">
                </el-table-column>
                <el-table-column prop="address" label="最终良率">
                </el-table-column>
              </el-table>
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
        <div>2</div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div><ElectroTestRateStatistics /></div>
        <div></div>
        <div><ElectroTestRateStatistics /></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ElectroTestRateStatistics from "../views/chart/ElectroTestRateStatistics.vue";

const tableData = ref([
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
  {
    date: "9月份",
    name: "02S71025C",
    address: "874",
  },
]);

const rowStyle = ref({
  color: "red",
  height: "3px",
  padding: "0px",
  // background: "rgba(2, 108, 202, 0.7)",
});

const getSummaries = (param: { columns: any[]; data: any[] }) => {
  const { columns, data } = param;
  const sums: any[] = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "12月合计"; // 首列显示标签
      return;
    }

    // 数值型字段求和（投入数、一次良品数、飞针测试数、良品数量、报废数）
    const sumCols = [2, 3, 4, 6, 7, 8];
    if (sumCols.includes(index)) {
      const values = data.map((item) => Number(item.address)); // 根据实际字段名调整
      sums[index] = values.reduce((prev, curr) => prev + curr, 0);
    }

    // 百分比字段求平均（一次良率、最终良率）
    const avgCols = [5, 9];
    if (avgCols.includes(index)) {
      const values = data.map((item) => parseFloat(item.address)); // 假设字段存储如 "95.00%"
      const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(
        2
      );
      sums[index] = `${avg}%`;
    }
  });
  return sums;
};
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
    grid-template-rows: 2fr 1fr;
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
      // 电测良率统计模块
      > div:nth-child(1) {
        display: flex; // 新增
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
          margin: 0 auto;
          // 电测良率的表格
          > div:nth-child(1) {
            flex: 9;
            width: 100%;
            height: 100%;
            background-color: blueviolet;
          }
          > div:nth-child(2) {
            flex: 1;
            display: flex;
            flex-direction: column;

            span {
              font-size: 0.2rem;
              flex: 1;
              display: flex; // 关键：将span转为弹性容器
              align-items: center; // 垂直居中
              justify-content: center; // 水平居中
            }
          }
        }
      }
      > div:nth-child(2) {
        background-color: blue;
      }
    }
    > div:nth-child(2) {
      display: flex;
      column-gap: 0.25rem;
      > div:nth-child(1) {
        flex: 2;
        background-color: salmon;
      }
      > div:nth-child(2) {
        flex: 2;
      }
      > div:nth-child(3) {
        flex: 2;
        height: 100%;
        background-color: red;
      }
      > div:nth-child(4) {
        flex: 1;
      }
      > div:nth-child(5) {
        background-color: green;
        flex: 2;
      }
      > div:nth-child(6) {
        flex: 1;
        background-color: yellow;
      }
    }
  }
}
</style>
