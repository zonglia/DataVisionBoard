<template>
  <div class="drought-prevention-container">
    <div class="drought-prevention-title">
      <Title title="N2工厂智能化数字化管控" process="防焊、文字" />
    </div>

    <div class="drought-prevention-main">
      <div class="card wide-card">
        <Attendance
          :attendance="attendanceData.presentEmployees"
          :totalStaff="attendanceData.totalEmployees"
          @refresh="handleRefresh"
        />
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
            (title:string) => {
              handleRefresh(title);
            }
          "
        />
      </div>
      <div class="card">
        <DoubleCurve
          title="防焊总报废"
          :categories="droughtPreventionScrapRate.map((item) => item.time)"
          :series-data="[
            {
              name: '报废目标(%)',
              value: Array(droughtPreventionScrapRate.length).fill(1.2), // 动态创建与数据长度相同的数组，填充1.2
            },
            {
              name: '报废率(%)',
              value: droughtPreventionScrapRate.map((item) => item.scrap),
            },
          ]"
          @refresh="handleRefresh"
        />
      </div>
      <div class="card">
        <DoubleCurve
          title="文字总报废"
          :categories="characterScrapRate.map((item) => item.time)"
          :series-data="[
            {
              name: '报废目标(%)',
              value: Array(characterScrapRate.length).fill(0.15), // 动态创建与数据长度相同的数组，填充1.5
            },
            {
              name: '报废率(%)',
              value: characterScrapRate.map((item) => item.scrap),
            },
          ]"
          @refresh="handleRefresh"
        />
      </div>
      <div class="card">
        <Carousel title="防焊CPK管控" :imgList="imgList" />
      </div>
      <div class="card">
        <EqualWidthScroll
          title="重要参数管控"
          svgName="setting"
          :header="['工序', '项目', '管控范围', '实际参数']"
          :table-data="[
            ['防焊丝印', '温度', '22±2℃', '22.6℃'],
            ['防焊曝光', '温度', '22±2℃', '21.7℃'],
            ['菲林房', '温度', '22±2℃', '21.8℃'],
            ['网房', '温度', '22±2℃', '22.3℃'],
            ['防焊丝印', '湿度', '55±5%', '57.60%'],
            ['防焊曝光', '湿度', '55±5%', '54.50%'],
            ['菲林房', '湿度', '55±5%', '56.60%'],
            ['网房', '湿度', '55±5%', '57.60%'],
            ['菲林房', '落尘量', '1000级', '950级'],
            ['防焊丝印', '落尘量', '10000级', '9000级'],
            ['防焊曝光', '落尘量', '5000级', '4900级'],
            ['防焊前处理', '酸洗浓度', 'H2So4:5±1%', 'H2So4:5%'],
            ['防焊前处理', '酸洗温度', '30±2℃', '30.8℃'],
            ['防焊前处理', '水洗压力', '1.5±0.5kg/cm2', '1.5 kg/cm2'],
            ['防焊前处理', '中粗化浓度', '90g±20g/L', '90g/L'],
            ['防焊前处理', '烘干温度', '90℃±5℃', '91℃'],
            ['防焊前丝印', '机台气压', '0.5±0.2MPA', '0.5MPA'],
            ['防焊前丝印', '预烤温度', '75±3℃', '75℃'],
            ['防焊前丝印', '预烤时间', '50±5min', '50min'],
            ['防焊曝光', '能量均匀性', 'Min/max:≥80%', 'Min/max:≥80%'],
            ['防焊曝光', '曝光能量', '6-9格', '8格'],
            ['防焊曝光', '灯管寿命', '≤1500H', '≤1500H'],
            ['防焊曝光', '菲林清洁频率', '40PNL/次', '40PNL/次'],
            ['防焊显影', '显影速度', '3.0±0.5m/min', '3.0m/min'],
            ['防焊显影', '浓度', '12±2g/l', '12g/l'],
            ['防焊显影', '显影压力', '1.5±0.5kg/cm2', '1.5kg/cm2'],
            ['防焊显影', '水洗压力', '1.0±0.5kg/cm2', '1.0kg/cm2'],
            ['文字印刷', '油墨使用寿命', '≤16小时', '≤16小时'],
            ['文字印刷', '丝印机总气压', '0.7±0.2mpa', '0.7mpa'],
            ['文字印刷', '刮刀压力', '0.3±0.1mpa', '0.3mpa'],
            ['文字印刷', '刮刀速度', '6±3格', '6格'],
            ['文字后烘', '烘烤温度', '150±5℃', '150℃'],
            ['文字后烘', '后烤时间', '60±5min', '60min'],
            ['文字网房', '曝光真空度', '-450±50mmHg', '-450mmHg'],
            ['文字网房', '拉网压力', '7.0±0.5kg/cm2', '7.0kg/cm2'],
            ['文字网房', '烘网温度', '40±5℃', '40℃'],
            ['文字网房', '烘网时间', '30±10min', '30min'],
            ['文字网房', '曝光灯寿命', '三个月', '三个月'],
          ]"
        />
      </div>
      <div class="card">
        <PieChart title="防焊不良分析" :pie-data="droughtPreventionScrap" />
      </div>
      <div class="card">
        <PieChart title="文字不良分析" :pie-data="characterScrap" />
      </div>
      <div class="card">
        <DoubleImage title="灯珠管控" :imgList="imgList2" />
      </div>
      <div class="card">
        <DeviceStatus :devices="devices" @refresh="handleRefresh" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Title from "@/components/Title.vue";
import Attendance from "@/components/Attendance/index.vue";
import ProcessOutPut from "@/components/ProcessOutput/index.vue";
import EqualWidthScroll from "@/components/Scroll/EqualWidth/index.vue";
import DoubleCurve from "@/components/DoubleCurve/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import PieChart from "@/components/PieChart/index.vue";
import DeviceStatus from "@/components/DeviceStatus/index.vue";
import DoubleImage from "@/components/DoubleImage/index.vue";
import {
  getScrapDailyBytechName,
  getScrapRateBytechName,
} from "@/api/scrap/index.ts";
import {
  getProcessDailyOutPut,
  getProcessMonthlyOutPut,
} from "@/api/processoutput/index.ts";
import { getDeviceStatus } from "@/api/device/index.ts";
import type { WipItem, GroupedItem } from "@/api/wip/type";
import { getWipByTechName } from "@/api/wip/index.ts";
import { getAttendance } from "@/api/attendance/index";
import type { AttendanceItem } from "@/api/attendance/type";

const attendanceData = ref<AttendanceItem>({
  totalEmployees: 0,
  presentEmployees: 0,
});

let timer: number | null = null; // 明确声明类型为 number 或 null
const imgList = ref([
  {
    url: new URL(`@/assets/image/drought/cpk01.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk02.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk03.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk04.png`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/cpk05.png`, import.meta.url).href,
  },
]);

const imgList2 = ref([
  {
    url: new URL(`@/assets/image/drought/bead02.jpg`, import.meta.url).href,
  },
  {
    url: new URL(`@/assets/image/drought/bead02.png`, import.meta.url).href,
  },
]);

const wip = ref<WipItem[]>([]);
const dailyOutput = ref([
  { techName: "防焊丝印", category: "防焊", output: 0 },
  { techName: "文字", category: "文字", output: 0 },
]);

const monthlyOutput = ref([
  { techName: "防焊丝印", category: "防焊", output: 0 },
  { techName: "文字", category: "文字", output: 0 },
]);

const droughtPreventionScrap = ref<
  Array<{ name: string; value: number; techName: string }>
>([]);
const characterScrap = ref<
  Array<{ name: string; value: number; techName: string }>
>([]);

const droughtPreventionScrapRate = ref<Array<{ time: string; scrap: number }>>(
  []
);

const characterScrapRate = ref<Array<{ time: string; scrap: number }>>([]);
const devices = ref<Array<{ name: string; status: number }>>([]);

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

      item.output = res.code === 200 ? res.data.outQty : 0;
    } catch (error) {
      ElMessage.error("获取日产量数据失败");
    }
  }
};

const fetchMonthlyOutput = async () => {
  for (const item of monthlyOutput.value) {
    try {
      const res = await getProcessMonthlyOutPut(item.techName.trim());

      item.output = res.code === 200 ? res.data.outQty : 0;
    } catch (error) {
      ElMessage.error("获取月产量数据失败");
    }
  }
};

const fetchDeviceStatus = async () => {
  try {
    const res = await getDeviceStatus("防焊、文字");
    if (res.code === 200 && res.data?.length > 0) {
      // 清空现有数据
      devices.value = [];

      // 正确处理API返回的数据
      res.data.forEach((apiItem: { name: string; status: number }) => {
        devices.value.push({
          name: apiItem.name,
          status: Math.round(apiItem.status),
        });
      });
      console.log("设备状态更新完成", devices.value);
    }
  } catch (error) {
    console.log(error);

    ElMessage.error("获取防焊总报废失败");
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

const fetchDroughtPreventionScrap = async () => {
  try {
    const res = await getScrapDailyBytechName("防焊");

    if (res.code === 200 && res.data?.length > 0) {
      // 遍历报废记录
      res.data.forEach((apiItem) => {
        droughtPreventionScrap.value.push({
          name: apiItem.scrap.bugName,
          value: apiItem.sunit,
          techName: "防焊",
        });
      });
    }
  } catch (error) {
    ElMessage.error("获取BBT不良分析失败");
  }
};

const fetchCharacterScrap = async () => {
  try {
    const res = await getScrapDailyBytechName("文字");

    if (res.code === 200 && res.data?.length > 0) {
      // 遍历报废记录
      res.data.forEach((apiItem) => {
        characterScrap.value.push({
          name: apiItem.scrap.bugName,
          value: apiItem.sunit,
          techName: "文字",
        });
      });
    }
  } catch (error) {
    ElMessage.error("获取BBT不良分析失败");
  }
};

const fetchDroughtPreventionScrapRate = async () => {
  try {
    const res = await getScrapRateBytechName("防焊");

    if (res.code === 200 && res.data?.length > 0) {
      // 清空现有数据
      droughtPreventionScrapRate.value = [];

      // 正确处理API返回的数据
      res.data.forEach((apiItem: { time: string; scrap: number }) => {
        const scrapValue =
          typeof apiItem.scrap === "number" ? apiItem.scrap : 0;
        droughtPreventionScrapRate.value.push({
          time: apiItem.time,
          scrap: Math.round(scrapValue * 100 * 100) / 100, // 转换为百分比并保留两位小数
        });
      });
    }
  } catch (error) {
    console.log(error);

    ElMessage.error("获取防焊总报废失败");
  }
};

const fetchCharacterScrapRate = async () => {
  try {
    const res = await getScrapRateBytechName("文字");

    if (res.code === 200 && res.data?.length > 0) {
      // 清空现有数据
      characterScrapRate.value = [];

      // 正确处理API返回的数据
      res.data.forEach((apiItem: { time: string; scrap: number }) => {
        const scrapValue =
          typeof apiItem.scrap === "number" ? apiItem.scrap : 0;
        characterScrapRate.value.push({
          time: apiItem.time,
          scrap: Math.round(scrapValue * 100 * 100) / 100, // 转换为百分比并保留两位小数
        });
      });
    }
  } catch (error) {
    console.log(error);

    ElMessage.error("获取防焊总报废失败");
  }
};
const fetchAttendance = async () => {
  try {
    const res = await getAttendance("防焊、文字");
    if (res.code === 200 && res.data?.length > 0) {
      // 使用扩展运算符保持响应式
      attendanceData.value = {
        ...res.data[0],
      };
    }
  } catch (error) {
    console.error("获取考勤数据失败", error);
  }
};
const handleRefresh = (title: string) => {
  console.log(`收到来自【${title}】的刷新请求`);

  // 根据不同的title执行不同逻辑
  switch (title) {
    case "人员出勤":
      fetchAttendance();
      break;
    case "工序出数":
      console.log("执行工序出数数据的刷新");
      fetchDailyOutput();
      fetchMonthlyOutput();
      break;
    case "WIP":
      console.log("执行WIP数据的刷新");
      fetchWip();
      break;
    case "防焊总报废":
      console.log("执行防焊总报废数据的刷新");
      fetchDroughtPreventionScrapRate();
      break;
    case "文字总报废":
      console.log("执行文字总报废数据的刷新");
      fetchCharacterScrapRate();
      break;
    case "设备状态":
      console.log("执行设备状态数据的刷新");
      fetchDeviceStatus();
      break;

    default:
      console.log("默认刷新逻辑");
  }
};
onMounted(async () => {
  await fetchDailyOutput();
  await fetchMonthlyOutput();
  await fetchWip();
  await fetchDroughtPreventionScrap();
  await fetchCharacterScrap();
  await fetchDroughtPreventionScrapRate();
  await fetchCharacterScrapRate();
  await fetchDeviceStatus();
  await fetchAttendance();
  timer = setInterval(() => {
    fetchDeviceStatus();
  }, 60 * 1000 * 60 * 8); // 每八小时获取一次
});
</script>

<style scoped lang="scss">
.drought-prevention-container {
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
    padding: 0.3rem 5rem;
    box-sizing: border-box;
    overflow-y: auto; // 保持垂直滚动功能
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; // Firefox隐藏滚动条
    &::-webkit-scrollbar {
      display: none; // Chrome/Safari隐藏滚动条
    }
  }
}

.drought-prevention-main {
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
