<template>
  <div class="drilling-container">
    <div><Title title="N2工厂智能化数字化管控" process="钻孔、成型" /></div>
    <div class="drilling-content">
      <div class="card wide-card">
        <Attendance :attendance="7" :totalStaff="7" />
      </div>
      <div class="card wide-card">
        <ProcessOutPut
          :daily-category="dailyOutput.map((item) => item.category)"
          :daily-output="dailyOutput.map((item) => item.output)"
          :monthly-category="monthlyOutput.map((item) => item.category)"
          :monthly-output="monthlyOutput.map((item) => item.output)"
          @refresh="
            (title) => {
              handleRefresh(title);
            }
          "
        />
      </div>
      <div class="card wide-card">
        <EqualWidthScroll
          :header="[
          '型号',
          '板结构',
          '类型',
          '单位',
          ...new Set(wip.map((item) => item.category as string)) // 去掉重复的工序名
        ]"
          :tableData="tableData"
          @refresh="
            (title) => {
              handleRefresh(title);
            }
          "
        />
      </div>
      <div class="card">
        <DoubleCurve
          title="钻孔总报废"
          :categories="['24Y', '25M3', '25M4', '5月6日', '5月7日', '5月8日']"
          :series-data="[
            {
              name: '报废目标(%)',
              value: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
            },
            {
              name: '报废率(%)',
              value: [0.43, 0, 0, 0, 0, 0],
            },
          ]"
        />
      </div>
      <div class="card">
        <DoubleCurve
          title="成型总报废"
          :categories="['24Y', '25M3', '25M4', '5月6日', '5月7日', '5月8日']"
          :series-data="[
            {
              name: '报废目标(%)',
              value: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
            },
            {
              name: '报废率(%)',
              value: [0.128, 0.852, 0, 0, 0, 0],
            },
          ]"
        />
      </div>
      <div class="card">
        <Carousel title="钻孔成型CPK管控" :imgList="imgList" />
      </div>
      <div class="card">
        <EqualWidthScroll
          title="重要参数管控"
          svgName="setting"
          :header="['工序', '过程', '设定值', '控制范围', '检查方法']"
          :table-data="[
            ['钻孔', 'AIR压力', '0.65mpa', '0.65±0.05mpa', '面盘显示'],
            ['钻孔', '压力脚压力', '0.35mpa', '0.35±0.05mpa', '面盘显示'],
            ['钻孔', '室内温度', '22℃', '18-26℃', '面盘显示'],
            ['钻孔', '冷却油温', '17℃', '17±2℃', '面盘显示'],
            ['钻孔', '室内湿度', '50%RH', '50±20%RH', '面盘显示'],
            ['成型', '油冷机温度', '20℃', '20±2℃', '显示器'],
            ['成型', 'runout', '≤20um', '≤20um', '仪器测量'],
            ['成型', '成型精度', '≤4mil', '≤4mil', '三次元量测'],
          ]"
        />
      </div>
      <div class="card">
        <PieChart
          title="钻孔不良分析"
          :pie-data="[
            { value: 7.6, name: '偏孔' },
            { value: 0.256, name: '漏孔' },
            { value: 2, name: '外力损伤' },
            { value: 0.144, name: '披锋' },
          ]"
        />
      </div>
      <div class="card">
        <PieChart
          title="成型不良分析"
          :pie-data="[
            { value: 2.5, name: '孔损' },
            { value: 5.2, name: '外力损伤' },
            { value: 1.5, name: '多铣' },
            {
              value: 0.8,
              name: '烧焦',
            },
          ]"
        />
      </div>
      <div class="card">
        <EqualWidthScroll
          title="主轴精度管控(um)"
          svg-name="ctrol"
          :header="[
            '日期',
            '机台号',
            'SP1',
            'SP2',
            'SP3',
            'SP4',
            'SP5',
            'SP6',
            '备注',
          ]"
          :table-data="[
            ['4/1', '1#', '7', '6', '4', '5', '', '', '<20um'],
            ['4/2', '2#', '6', '7', '5', '6', '', '', '<20um'],
            ['4/3', '3#', '3', '7', '4', '6', '', '', '<20um'],
            ['4/4', '4#', '5', '8', '9', '6', '', '', '<20um'],
            ['4/5', '5#', '8', '5', '7', '5', '', '', '<20um'],
            ['4/6', '6#', '9', '9', '5', '6', '', '', '<20um'],
            ['4/7', '7#', '9', '9', '4', '8', '', '', '<20um'],
            ['4/8', '8#', '8', '9', '5', '5', '', '', '<20um'],
            ['4/9', '9#', '9', '8', '5', '8', '', '', '<20um'],
            ['4/10', '10#', '6', '5', '8', '5', '', '', '<20um'],
            ['4/11', '11#', '5', '7', '9', '6', '', '', '<20um'],
            ['4/2', '1#', '6', '6', '7', '6', '6', '7', '<15um'],
            ['4/3', '2#', '9', '5', '6', '6', '4', '9', '<15um'],
            ['4/4', '3#', '8', '9', '7', '8', '9', '7', '<15um'],
            ['4/5', '4#', '6', '7', '5', '5', '7', '9', '<15um'],
            ['4/6', '5#', '9', '8', '9', '6', '9', '5', '<15um'],
            ['4/7', '6#', '9', '8', '7', '7', '4', '9', '<15um'],
            ['4/8', '7#', '6', '6', '7', '9', '8', '8', '<15um'],
            ['4/9', '8#', '8', '5', '9', '7', '8', '5', '<15um'],
            ['4/10', '9#', '9', '4', '8', '9', '4', '5', '<15um'],
            ['4/11', '10#', '8', '8', '7', '4', '7', '7', '<15um'],
          ]"
          :headerFontSize="0.15"
        />
      </div>
      <div class="card"><DeviceStatus :devices="devices" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Title from "@/components/Title.vue";
import Attendance from "@/components/Attendance/index.vue";
import ProcessOutPut from "@/components/ProcessOutput/index.vue";
import EqualWidthScroll from "@/components/Scroll/EqualWidth​/index.vue";
import DoubleCurve from "@/components/DoubleCurve/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import PieChart from "@/components/PieChart/index.vue";
import DeviceStatus from "@/components/DeviceStatus/index.vue";
import {
  getProcessDailyOutPut,
  getProcessMonthlyOutPut,
} from "@/api/processoutput/index.ts";
import type { WipItem, GroupedItem } from "@/api/wip/type";
import { getWipByTechName } from "@/api/wip/index.ts";

const imgList = ref([
  {
    url: new URL(`@/assets/image/drilling/banner1.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner2.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner3.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner4.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner5.png`, import.meta.url).href,
  },

  {
    url: new URL(`@/assets/image/drilling/banner6.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner7.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner8.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner9.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/banner10.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk1.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk2.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk3.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk4.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk5.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk6.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk7.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drilling/cpk/cpk8.png`, import.meta.url).href,
  },
]);
const wip = ref<WipItem[]>([]);
const devices = [
  { name: "1#钻孔机", status: 3 },
  { name: "2#钻孔机", status: 1 },
  { name: "3#钻孔机", status: 1 },
  { name: "4#钻孔机", status: 3 },
  { name: "5#钻孔机", status: 1 },

  { name: "6#钻孔机", status: 3 },
  { name: "7#钻孔机", status: 3 },
  { name: "8#钻孔机", status: 3 },
  { name: "9#钻孔机", status: 1 },
  { name: "10#钻孔机", status: 3 },

  { name: "1#成型机", status: 1 },
  { name: "2#成型机", status: 1 },
  { name: "3#成型机", status: 3 },
  { name: "4#成型机", status: 1 },
  { name: "5#成型机", status: 3 },

  { name: "6#成型机", status: 3 },
  { name: "7#成型机", status: 3 },
  { name: "8#成型机", status: 1 },
  { name: "9#成型机", status: 1 },
  { name: "10#成型机", status: 3 },
];

const dailyOutput = ref([
  { techName: "钻挂PIN孔", category: "钻孔", output: 0 },
  { techName: "撕膜", category: "成型", output: 0 },
]);

const monthlyOutput = ref([
  { techName: "钻挂PIN孔", category: "钻孔", output: 0 },
  { techName: "撕膜", category: "成型", output: 0 },
]);

onMounted(() => {
  fetchDailyOutput();
  fetchMonthlyOutput();
  fetchWip();
});

const tableData = computed(() => {
  // 1. 获取所有唯一的工序类别(category)并保持原始顺序
  // 使用Set去重，然后展开为数组
  // 例如：['BBT', 'AVI', '包装']
  const categories = [...new Set(wip.value.map((item) => item.category))];

  // 2. 按产品型号(pdctNo)分组处理数据
  // 使用reduce方法遍历wip数组，创建一个按pdctNo分组的对象
  //   {
  //   "01S71041F0": {
  //     pdctNo: "01S71041F0",
  //     nospec: "HDI板",     // 最后更新的值
  //     style: "量产",       // 最后更新的值
  //     units: "P",         // 最后更新的值
  //     categoryData: {
  //       BBT: 244,        // 来自第一个对象
  //       AVI: 142,        // 来自第二个对象
  //       包装: 344         // 来自第三个对象
  //      }
  //    },
  //   }
  const groupedData = wip.value.reduce(
    (acc: Record<string, GroupedItem>, item) => {
      // 2.1 获取当前项的pdctNo作为分组键
      const key = item.model.pdctNo;

      // 2.2 如果该pdctNo的分组不存在，则初始化一个新分组
      if (!acc[key]) {
        acc[key] = {
          pdctNo: key, // 产品型号
          nospec: item.model.nospec,
          style: item.model.style,
          units: item.units,
          categoryData: {},
        };
      }

      // 2.3 更新当前分组中各工序类别的结存数据(procWip)
      // 例如：categoryData: { BBT: 244, AVI: 142 }
      if (item.category) {
        acc[key].categoryData[item.category] = item.procWip;
      }

      // 2.4 保留最完整的板结构和类型信息
      // 如果当前项有nospec/style值，则更新分组中的值
      // 这样确保显示最完整的信息（后出现的值会覆盖前面的）
      if (item.model.nospec) acc[key].nospec = item.model.nospec;
      if (item.model.style) acc[key].style = item.model.style;

      return acc; // 返回累积的分组数据
    },
    {}
  ); // 初始值为空对象

  // 3. 将分组数据转换为表格数据格式
  return Object.values(groupedData).map((item) => [
    // 3.1 第一列：产品型号
    item.pdctNo,

    // 3.2 第二列：板结构
    item.nospec,

    // 3.3 第三列：类型
    item.style,

    // 3.4 第四列：单位
    item.units,

    // 3.5 动态填充各工序类别的结存数据
    // 按照categories的顺序，从categoryData中获取对应的procWip
    // 如果没有对应数据则显示0
    ...categories.map((category) => item.categoryData[category] || 0),
  ]);
});

const fetchDailyOutput = async () => {
  for (const item of dailyOutput.value) {
    try {
      const res = await getProcessDailyOutPut(item.techName.trim());

      item.output =
        res.code === 200 && res.data?.length > 0 ? res.data[0].outQty : 0;
    } catch (error) {
      ElMessage.error("获取日产量数据失败");
    }
  }
};

const fetchMonthlyOutput = async () => {
  for (const item of monthlyOutput.value) {
    try {
      const res = await getProcessMonthlyOutPut(item.techName.trim());

      item.output =
        res.code === 200 && res.data?.length > 0 ? res.data[0].outQty : 0;
    } catch (error) {
      ElMessage.error("获取月产量数据失败");
    }
  }
};

const handleRefresh = (title: string) => {
  console.log(`收到来自【${title}】的刷新请求`);

  // 根据不同的title执行不同逻辑
  switch (title) {
    case "工序出数":
      console.log("执行工序出数数据的刷新");
      fetchDailyOutput();
      fetchMonthlyOutput();
      break;
    case "WIP":
      console.log("执行WIP数据的刷新");
      fetchWip();
      break;
    default:
      console.log("默认刷新逻辑");
  }
};
const fetchWip = async () => {
  try {
    // 创建临时数组存储新数据
    const newWipData = [];

    // 遍历现有wip数据获取对应工序的最新数据
    for (const item of dailyOutput.value) {
      const res = await getWipByTechName(item.techName.trim());

      // 检查响应是否有效
      if (res.code === 200 && res.data && res.data.length > 0) {
        // 将API返回的数据处理后添加到新数组

        newWipData.push(
          ...res.data.map((apiItem: WipItem) => ({
            techNo: apiItem.techNo?.trim(),
            techName: apiItem.techName?.trim(),
            model: {
              pdctNo: apiItem.model?.pdctNo,
              style: apiItem.model?.style,
              nospec: apiItem.model?.nospec,
            },
            procWip: apiItem.procWip || 0,
            units: apiItem.units,
            category: item.category, // 保持原有category
          }))
        );
      }
    }

    // 更新wip数组（保留原有结构，只更新数据）
    wip.value = newWipData.length > 0 ? newWipData : wip.value;

    console.log("WIP数据更新完成", wip.value);
  } catch (error) {
    console.error("获取WIP数据失败:", error);
    ElMessage.error("获取WIP数据失败");
  }
};
</script>

<style scoped lang="scss">
.drilling-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: url(@/assets/image/bg6.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden; //隐藏溢出内容

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(@/assets/image/bg6.jpg) no-repeat center;
    background-size: cover;
    filter: blur(4px); //模糊效果
    z-index: 0; //置于底层
  }

  /* 所有直接子元素置于模糊层上方 */
  > * {
    position: relative;
    z-index: 1;
  }

  // 标题
  > div:nth-child(1) {
    flex: 2;
  }
  // 内容
  > div:nth-child(2) {
    flex: 8;
    padding: 0.3rem 0.5rem;
    box-sizing: border-box;
    overflow-y: auto; // 保持垂直滚动功能
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; // Firefox隐藏滚动条
    &::-webkit-scrollbar {
      display: none; // Chrome/Safari隐藏滚动条
    }
  }
}

.drilling-content {
  display: grid;
  gap: 0.2rem;

  // 桌面端布局
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr); // 创建12等分的列布局，每列宽度相同
    grid-auto-rows: 1fr; // 所有行自动等高

    .wide-card {
      grid-column: span 4; // 带有wide-card类的卡片横跨4列（3个wide-card正好占满12列）
    }

    .card:not(.wide-card) {
      grid-column: span 3; // 不带wide-card类的普通卡片横跨3列（4个普通卡片正好占满12列）
    }
  }
  @media (max-width: 992px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-auto-rows: 45%;
  }
}

.card {
  overflow: hidden; // 添加overflow防止图表溢出
}
</style>
