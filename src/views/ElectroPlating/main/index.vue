<template>
  <div class="electro-content">
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
  '板类型',
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
        title="电镀报废率趋势"
        svg-name="yield"
        :categories="electroPlatingScrapRate.map((item) => item.time)"
        :series-data="[
          {
            name: '报废目标(%)',
            value: Array(electroPlatingScrapRate.length).fill(0.5),
          },
          {
            name: '报废率(%)',
            value: electroPlatingScrapRate.map((item) => item.scrap),
          },
        ]"
      />
    </div>
    <div class="card">
      <Carousel title="面铜CPK管控" :imgList="imgList" />
    </div>

    <div class="card">
      <EqualWidthScroll
        title="设备保养周期"
        svgName="maintenance"
        :header="[
          '设备名称',
          '保养频率',
          '本次保养时间',
          '下次保养时间',
          '备注',
        ]"
        :table-data="[
          ['日蚀线1#', '1次/周', '2025/5/14', '2025/5/21', ''],
          ['日蚀线2#', '/', '/', '/', '调试'],
          ['VCP线1#', '1次/周', '2025/5/15', '2025/5/22', ''],
          ['VCP线2#', '/', '/', '/', '调试'],
          ['电镀后处理', '1次/周', '2025/5/16', '2025/5/23', ''],
        ]"
      />
    </div>
    <div class="card">
      <EqualWidthScroll
        title="设备报警记录"
        svgName="alarm"
        :header="['线体', '异常报警', '报警时间']"
        :table-data="[
          ['VCP1#线', '抗氧化液位过低请检查', `${getCurrentDate()} 20:19`],
          ['VCP1#线', '烘干温度异常', `${getCurrentDate()} 8:22`],
          ['除胶渣日蚀线1#', '急停按下请检查', `${getCurrentDate()} 18:39`],
          [
            '除胶渣日蚀线1#',
            '水刀洗2液位过低请检查',
            `${getCurrentDate()} 9:14`,
          ],
        ]"
        :rowNum="3"
      />
    </div>
    <div class="card">
      <PieChart
        title="电镀报废分析"
        :pie-data="electroPlatingPreventionScrap"
      />
    </div>

    <div class="card">
      <Carousel title="孔铜CPK管控" :imgList="imgList2" />
    </div>
    <div class="card">
      <EqualWidthScroll
        title="重要参数管控"
        svgName="ctrol"
        :header="['设备名称', '槽体', '过程', '设定值', '控制范围']"
        :table-data="[
          ['VCP线', '常温槽', '温度', '25℃', '25±2℃'],
          ['VCP线', '清洁槽', '温度', '30℃', '30±3℃'],
          ['VCP线', '水洗槽', '溢流', '5L/min', '5±1L/min'],
          ['VCP线', '预浸槽', 'H2SO4', '10g/L', '10g/L'],
          ['VCP线', '铜槽', '过滤机压力', '1kg', '1±0.5kg'],
          ['VCP线', '铜槽', '铜槽喷流流量', '40m3/h', '20-50m3/h'],
          ['VCP线', '铜槽', '铜槽温度', '24℃', '24±2℃'],
          ['VCP线', '铜槽', 'CUSO4', '60g/l', '60±10g/l'],
          ['VCP线', '铜槽', 'CL-', '60PPM', '40-70PPM'],
          ['VCP线', '铜槽', 'H2SO4', '240g/l', '240±20g/l'],
          ['VCP线', '铜槽', '湿润剂（172544）', '10/L', '10±3 ml/L'],
          ['VCP线', '铜槽', '柔软剂（172546）', '6/L', '6±3 ml/L'],
          ['VCP线', '铜槽', '光泽剂（172545）', '0.8/L', '0.8±3 ml/L'],
          ['电镀后处理', '传送', '传送速度', '2.0m/min', '2.0±1.0m/min'],
          ['电镀后处理', '酸洗', '水洗压力', '1.5kg/cm', '1.5±0.2kg/cm'],
          ['电镀后处理', '磨刷', '工作电流', '2.95A', '2.95±0.55A'],
          ['电镀后处理', '磨刷', '刷幅', '10mm', '10±2mm'],
          ['电镀后处理', '磨刷', '摆动频率', '220cycle/min', '220±10cycle/min'],
          ['电镀后处理', '磨刷', '刷毛长度', '＞8mm', '＞8mm'],
          ['电镀后处理', '水洗', '水洗流量', '300L/H', '300±60L/H'],
          ['电镀后处理', '水洗', '水洗压力', '1.6kg/cm2', '1.3±0.3kg/cm2'],
          ['电镀后处理', '热风吹干', '温度', '90℃', '90±5℃'],
          ['日蚀线', '膨松', '温度', '75℃', '75±3℃'],
          ['日蚀线', '膨松', '超音波功率', '＞70%', '＞70%'],
          ['日蚀线', '膨松', '超音波频率', '＞20KHZ', '＞20KHZ'],
          ['日蚀线', '膨松', 'M-ATAQ 179220', '0.3', '0.3'],
          ['日蚀线', '膨松', '氢氧化钠', '0.04', '3-5%'],
          ['日蚀线', '除胶渣', '温度', '80±3℃', '80±3℃'],
          ['日蚀线', '除胶渣', '再生机电流', '生产时：1500±100A', '1500±100A'],
          ['日蚀线', '除胶渣', '超音波功率', '＞75%', '＞75%'],
          ['日蚀线', '除胶渣', '超音波频率', '＞20KHZ', '＞20KHZ'],
          ['日蚀线', '除胶渣', '高锰酸钾', '45 g/L', '45-70 g/L'],
          ['日蚀线', '除胶渣', '副产物', '＜25 g/L', '＜25 g/L'],
          ['日蚀线', '除胶渣', '119276', '0.046', '4.3-5.7%'],
          ['日蚀线', '除胶渣', '除胶速率', '10-40mg/dm2', '15-35 mg/dm2'],
          ['日蚀线', '中和', '温度', '25℃', '25±3℃'],
          ['日蚀线', '中和', '压力表压力', '0.2 kg/cm2', '0.2±0.1kg/cm2'],
          ['日蚀线', '中和', '中和剂179225', '1-2%', '1.0-1.8%'],
          ['日蚀线', '中和', 'H2SO4', '6-10%', '6.5-9.5%'],
          ['日蚀线', '中和', '中和速率', '10-40μ”', '15-35μ”'],
          ['日蚀线', '中和', 'Cu2+', '≤30g/L', '≤30g/L'],
          ['日蚀线', '除油', '温度', '54℃', '54±3℃'],
          ['日蚀线', '除油', '超声波功率', '＞70%', '＞70%'],
          ['日蚀线', '除油', '超音波频率', '＞20KHZ', '＞20KHZ'],
          ['日蚀线', '除油', '压力表压力', '0.2 kg/cm2', '0.2±0.1kg/cm2'],
          ['日蚀线', '除油', '115759', '0.05', '0.05'],
          ['日蚀线', '日蚀', '温度', '32℃', '32±3℃'],
          ['日蚀线', '日蚀', '压力表压力', '0.2 kg/cm2', '0.2±0.1kg/cm2'],
          ['日蚀线', '日蚀', '固形物百分比', '1.6-2.0%', '1.6-2.0%'],
          ['日蚀线', '日蚀', '115756', '0.16', '0.16'],
          ['日蚀线', '日蚀', 'PH', '9.6', '9.6-10.4'],
          ['日蚀线', '微蚀', '微蚀速率', '40μ”', '40±10μ”'],
          ['日蚀线', '烘干', '温度', '80±3℃', '80±3℃'],
        ]"
      />
    </div>

    <div class="card">
      <DeviceStatus :devices="devices" @refresh="handleRefresh" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Attendance from "@/components/Attendance/index.vue";
import ProcessOutPut from "@/components/ProcessOutput/index.vue";
import EqualWidthScroll from "@/components/Scroll/EqualWidth/index.vue";
import DoubleCurve from "@/components/DoubleCurve/index.vue";
import PieChart from "@/components/PieChart/index.vue";
import DeviceStatus from "@/components/DeviceStatus/index.vue";

import {
  getProcessDailyOutPut,
  getProcessMonthlyOutPut,
} from "@/api/processoutput/index.ts";

import {
  getScrapDailyBytechName,
  getScrapRateBytechName,
} from "@/api/scrap/index.ts";

import type { WipItem, GroupedItem } from "@/api/wip/type";
import { getWipByTechName } from "@/api/wip/index.ts";
import { getDeviceStatus } from "@/api/device/index.ts";
import { getAttendance } from "@/api/attendance/index";
import type { AttendanceItem } from "@/api/attendance/type";

const attendanceData = ref<AttendanceItem>({
  totalEmployees: 0,
  presentEmployees: 0,
});

const electroPlatingScrapRate = ref<Array<{ time: string; scrap: number }>>([]);
let timer: number | null = null; // 明确声明类型为 number 或 null
const devices = ref<Array<{ name: string; status: number }>>([]);

const imgList = ref([
  {
    url: new URL(`@/assets/image/electro/cpk01.png`, import.meta.url).href,
  },
]);

const imgList2 = ref([
  {
    url: new URL(`@/assets/image/electro/cpk02.png`, import.meta.url).href,
  },
]);
// 获取当天日期格式化函数
const getCurrentDate = () => {
  const today = new Date();
  return `${today.getFullYear()}/${today.getMonth() + 1}/${
    today.getDate() - 1
  }`;
};

const wip = ref<WipItem[]>([]);

const dailyOutput = ref([
  { techName: "外层板电", category: "电镀", output: 0 },
  { techName: "过超声波", category: "磨板", output: 0 },
  { techName: "去污沉铜", category: "日蚀", output: 0 },
]);

const monthlyOutput = ref([
  { techName: "外层板电", category: "电镀", output: 0 },
  { techName: "过超声波", category: "磨板", output: 0 },
  { techName: "去污沉铜", category: "日蚀", output: 0 },
]);

const electroPlatingPreventionScrap = ref<
  Array<{ name: string; value: number; techName: string }>
>([]);



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
          tghdij: item.model.tghdij || "",
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
      if (item.model.tghdij) acc[key].tghdij = item.model.tghdij;
      return acc; // 返回累积的分组数据
    },
    {}
  ); // 初始值为空对象

  // 3. 将分组数据转换为表格数据格式
  return Object.values(groupedData).map((item) => [
    // 3.1 第一列：产品型号
    item.pdctNo,

    // 3.2 第二列：板结构
    item.tghdij || "",

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
const fetchDeviceStatus = async () => {
  try {
    const res = await getDeviceStatus("电镀");
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
const fetchElectroPlatingScrap = async () => {
  try {
    const res = await getScrapDailyBytechName("电镀");

    if (res.code === 200 && res.data?.length > 0) {
      // 遍历报废记录
      res.data.forEach((apiItem) => {
        electroPlatingPreventionScrap.value.push({
          name: apiItem.scrap.bugName,
          value: apiItem.sunit,
          techName: "电镀",
        });
      });
    }
  } catch (error) {
    ElMessage.error("获取BBT不良分析失败");
  }
};

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
              tghdij: apiItem.model?.tghdij,
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

const fetchElectroPlatingScrapRate = async () => {
  try {
    const res = await getScrapRateBytechName("外层板电");

    if (res.code === 200 && res.data?.length > 0) {
      // 清空现有数据
      electroPlatingScrapRate.value = [];

      // 正确处理API返回的数据
      res.data.forEach((apiItem: { time: string; scrap: number }) => {
        const scrapValue =
          typeof apiItem.scrap === "number" ? apiItem.scrap : 0;
        electroPlatingScrapRate.value.push({
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
    const res = await getAttendance("电镀");
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
      fetchDailyOutput();
      fetchMonthlyOutput();
      break;
    case "WIP":
      fetchWip();
      break;
    case "电镀报废率趋势":
      fetchElectroPlatingScrap();
      break;
    case "电镀报废分析":
      fetchElectroPlatingScrap();
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
  await fetchElectroPlatingScrapRate();
  await fetchElectroPlatingScrap();
  await fetchDeviceStatus();
  await fetchAttendance();
  timer = setInterval(() => {
    fetchDeviceStatus();
  }, 60 * 1000 * 60 * 8); // 每八小时获取一次
});
</script>

<style scoped lang="scss">
.electro-content {
  height: 100%;
  display: grid;
  gap: 0.2rem;

  // 桌面端布局
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr); // 创建12等分的列布局，每列宽度相同
    grid-auto-rows: 1fr; // 所有行自动等高

    .card {
      grid-column: span 4; // 带有card类的卡片横跨4列（3个card正好占满12列）
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
