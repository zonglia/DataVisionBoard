<template>
  <div class="aoi-container">
    <div><Title title="N2工厂智能化数字化管控" process="外层 AOI" /></div>
    <div class="aoi-content">
      <div class="card wide-card">
        <Attendance :attendance="26" :totalStaff="26" />
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
          title="外层报废率和报废分析"
          svg-name="yield"
          :categories="[
            '24Y',
            '25M1',
            '25M2',
            '25M3',
            '25M4',
            '5/3',
            '5/4',
            '5/5',
            '5/6',
          ]"
          :series-data="[
            {
              name: '报废目标(%)',
              value: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
              label: { show: false },
            },
            {
              name: '报废率(%)',
              value: [0.67, 0, 0, 0.93, 1.12, 0, 2.0, 0.79, 0],
            },
          ]"
        />
      </div>
      <div class="card">
        <DoubleCurve
          title="AOI良率统计和不良分析"
          svg-name="yield"
          :categories="['4/29', '4/30', '5/3', '5/4', '5/5']"
          :series-data="[
            {
              name: '一次良率(%)',
              value: [83.9, 82.0, 82.7, 50.5, 51.7],
            },
            {
              name: '最终良率(%)',
              value: [99.2, 99.3, 99.3, 97.9, 99.0],
            },
          ]"
        />
      </div>
      <div class="card">
        <Carousel title="CPK管控" :imgList="imgList" />
      </div>
      <div class="card">
        <EqualWidthScroll
          title="重要参数管控"
          svgName="setting"
          :header="['工序', '项目', '管控范围', '实际参数']"
          :table-data="[
            ['外层', '传送速度', '2000mm/min', '2000±1000mm/min'],
            ['外层', '微蚀浓度', 'H2SO4：90g/L', 'H2SO4：90±20g/L'],
            ['外层', '微蚀浓度', 'H2O2:35g/L', 'H2O2:35±15g/L'],
            ['外层', '微蚀浓度', 'Cu2+:≤35g/L', 'Cu2+:≤35g/L'],
            ['外层', '微蚀温度', '30℃', '30±2℃'],
            ['外层', '微蚀压力', '1.3kg/cm2', '1.3±0.3kg/cm2'],
            ['外层', '微蚀速率', '25U″', '25±5U″'],
            ['外层', '水破', '≥15秒', '≥15秒'],
            ['外层', '压膜温度', '110℃', '110±10℃'],
            ['外层', '压膜压力', '0.4mpa', '0.4±0.1mpa'],
            ['外层', '贴膜气缸压力', '0.25-0.4mpa', '0.25-0.4mpa'],
            ['外层', '上下干膜煞车气缸压力', '0.2mpa', '0.2±0.1mpa'],
            ['外层', '压膜速度', '2.0m/min', '2.0±1m/min'],
            ['外层', '二段压膜温度', '110℃', '110±10℃'],
            ['外层', '二段压膜压力', '0.4mpa', '0.4±0.1mpa'],
            ['外层', '气压', '0.4mpa', '0.3-0.5mpa'],
            ['外层', '热压轮寿命', '1200小时', '≤1200小时'],
            ['外层', '切刀更换', '12万次', '≤12万次'],
            ['外层', '贴膜压条更换', '15万次', '≤15万次'],
            ['外层', '真空滤器芯更换', '1500小时', '≤1500小时'],
            ['外层', '贴膜时间', '1-3 秒', '1-3 秒'],
            ['外层', '贴膜温度', '40℃', '40±10℃'],
            ['外层', '前后留铜', '0-7mm', '0-7mm'],
            ['外层', '粘尘纸卷切割', '≤100片', '≤120片'],
            ['外层', '粘尘机压力', '0.4-0.6mpa', '0.4-0.6mpa'],
            ['外层', '粘尘机速度', '30-40', '30-40'],
            [
              '外层',
              '压膜轮压痕迹测试',
              '每天一次或更换压膜轮时测试',
              '每天一次或更换压膜轮时测试',
            ],
            ['外层', '能量尺', '5-7格', '21格能量尺'],
            ['外层', '台面真空(mmHg)', '≤-5', '真空表'],
            ['外层', '冰水机温度', '20℃±1℃', '温度表'],
            ['外层', 'pe预警值', '0.05mm', '机台设定'],
            ['外层', 'Pe水平阀值', '0.08mm', '机台设定'],
            ['外层', 'Pe竖直阀值', '0.08mm', '机台设定'],
            ['外层', 'Pe斜边阀值', '0.14mm', '机台设定'],
            ['外层', 'BSAPE阈值', '0.05mm', '机台设定'],
            ['外层', 'PCB板厚阈值', '0.05mm', '机台设定'],
            ['外层', '自动标定间隔时间', '12小时', '目视'],
            ['外层', '压力', '1.5kg/cm2', '1.5±0.3kg/cm2'],
            ['外层', '显影点', '50%', '50±10%'],
            ['外层', '温度', '30℃', '30±2℃'],
            ['外层', '浓度', '12g/L', '12±2g/L'],
            ['外层', '速度', '3500mm/min', '3500±1000mm/min'],
            ['外层', '流量', '300L/H', '300±60L/H'],
            ['外层', '压力', '上:3.0±0.5kg/cm2', '上:3.0±0.5kg/cm2'],
            ['外层', '压力', '下:2.5±0.5kg/cm2', '下:2.5±0.5kg/cm2'],
            ['外层', '温度', '50±5℃', '50±5℃'],
            ['外层', '浓度', '酸碱度0.4', '0.1-1'],
            ['外层', '浓度', 'SG. 1.325', 'SG. 1.29-1.36'],
            ['外层', '浓度', 'Cu2：5%', 'Cu2：4%-6%'],
            ['外层', '速度', '铜厚', '速度', '首件确认'],
            ['外层', '速度', '32-45um', '4000±1000mm/min', '4000mm/min'],
            ['外层', '均匀性', '上压≥85%下压≥90%', '上压≥85%下压≥90%'],
            ['外层', '蚀刻因子', '≥3', '≥3'],
            ['外层', '车间温度', '22±2℃', '22.1℃'],
            ['外层', '车间湿度', '55±5℃', '54.2℃'],
            ['AOI', '车间温度', '23±3℃', '22.9℃'],
            ['AOI', '车间湿度', '40±20℃', '33.9℃'],
            ['外层', '落尘量', '小于10000级', '6543级'],
          ]"
        />
      </div>
      <div class="card">
        <PieChart
          title="外层不良分析"
          :pie-data="[
            { value: 1.28, name: '外层赃物开路' },
            { value: 0.16, name: '外层脏物缺口' },
            { value: 0.1, name: '外层过蚀' },
          ]"
        />
      </div>
      <div class="card">
        <PieChart
          title="AOI不良分析"
          :pie-data="[
            { value: 1.28, name: '外层赃物开路' },
            { value: 0.16, name: '外层脏物缺口' },
            { value: 0.1, name: '外层过蚀' },
          ]"
        />
      </div>
      <div class="card">
        <Carousel title="灯珠尺寸管控" :imgList="imgList2" />
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
    url: new URL(`@/assets/image/aoi/cpk/cpk01.png`, import.meta.url).href,
  },
]);
const imgList2 = ref([
  {
    url: new URL(`@/assets/image/aoi/bead/bead01.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/aoi/bead/bead02.png`, import.meta.url).href,
  },
]);

const wip = ref<WipItem[]>([]);
const devices = [
  { name: "1#前处理", status: 3 },
  { name: "2#前处理", status: 1 },

  { name: "1#压膜机", status: 3 },
  { name: "2#压膜机", status: 1 },

  { name: "1#半自动曝光机", status: 3 },
  { name: "2#半自动曝光机", status: 3 },

  { name: "1#LDI", status: 1 },

  { name: "1#蚀刻机", status: 1 },
  { name: "2#蚀刻机", status: 3 },

  { name: "1#AOI机", status: 1 },
  { name: "2#AOI机", status: 1 },
  { name: "3#AOI机", status: 1 },

  { name: "1#VRS", status: 1 },
  { name: "2#VRS", status: 1 },
  { name: "3#VRS", status: 1 },
];

const dailyOutput = ref([
  { techName: "外层干膜", category: "外层干膜", output: 0 },
  { techName: "外层AOI", category: "外层AOI", output: 0 },
]);

const monthlyOutput = ref([
  { techName: "外层干膜", category: "外层干膜", output: 0 },
  { techName: "外层AOI", category: "外层AOI", output: 0 },
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
.aoi-container {
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

.aoi-content {
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
