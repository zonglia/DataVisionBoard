<template>
  <div class="BBT-content">
    <div class="card">
      <Attendance :attendance="10" :totalStaff="10" />
    </div>
    <!-- 日产出/月产出 -->
    <div class="card">
      <ProcessOutPut
        @refresh="
          (title) => {
            handleRefresh(title);
          }
        "
        :daily-category="dailyOutput.map((item) => item.category)"
        :daily-output="dailyOutput.map((item) => item.output)"
        :monthly-category="monthlyOutput.map((item) => item.category)"
        :monthly-output="monthlyOutput.map((item) => item.output)"
      />
    </div>
    <!-- 工序结存 -->
    <div class="card">
      <EqualWidthScroll
        :header="[
          '型号',
          '板结构',
          '类型',
          '单位',
          ...new Set(wip.map((item) => item.category as string)) // 去掉重复的工序名
        ]"
        :tableData="tableData"
        :headerFontSize="0.2"
        @refresh="
          (title) => {
            handleRefresh(title);
          }
        "
      />
    </div>

    <div class="card">
      <DoubleCurve
        title="BBT良率统计"
        svg-name="yield"
        :categories="[
          '4/20',
          '4/21',
          '4/22',
          '4/23',
          '4/24',
          '4/25',
          '4/26',
          '4/27',
          '4/28',
          '4/29',
          '4/30',
          '5/3',
          '5/4',
          '5/5',
          '5/6',
          '5/7',
          '5/8',
        ]"
        :series-data="[
          {
            name: '一次良率(%)',
            value: [
              94.8, 91.5, 94.1, 93.1, 95.3, 90.0, 89.0, 86.2, 74.6, 75.0, 90.0,
              90.4, 80.4, 91.7, 90.4, 88.8, 90.9,
            ],
          },
          {
            name: '最终良率(%)',
            value: [
              99.3, 100.0, 98.7, 99.0, 99.3, 99.3, 99.1, 99.1, 99.4, 99.7, 99.5,
              99.0, 99.4, 99.5, 99.2, 98.8, 99.7,
            ],
          },
        ]"
      />
    </div>
    <div class="card">
      <DoubleCurve
        title="AVI良率统计"
        svg-name="yield"
        :categories="[
          '4/20',
          '4/21',
          '4/22',
          '4/23',
          '4/24',
          '4/25',
          '4/26',
          '4/27',
          '4/28',
          '4/29',
          '4/30',
          '5/3',
          '5/4',
          '5/5',
          '5/6',
          '5/7',
          '5/8',
        ]"
        :series-data="[
          {
            name: '一次良率(%)',
            value: [
              75.1, 85.7, 75.0, 73.3, 77.0, 66.2, 73.1, 81.5, 81.7, 84.0, 80.9,
              81.6, 80.5, 77.2, 77.9, 74.5, 78.1,
            ],
          },
          {
            name: '最终良率(%)',
            value: [
              97.5, 96.5, 92.3, 96.0, 97.1, 95.7, 99.0, 98.8, 97.6, 99.1, 99.7,
              99.3, 99.7, 98.0, 99.2, 98.4, 98.5,
            ],
          },
        ]"
      />
    </div>
    <div class="card">
      <EqualWidthScroll
        title="重要参数管控"
        svgName="setting"
        :header="['工序', '过程', '设定值', '控制范围']"
        :table-data="[
          ['电测', '车间温度', '23±3℃', '23.5℃'],
          ['电测', '车间湿度', '50±10%', '46%'],
          ['电测', '测试电压', '250V', '250V'],
          ['电测', '开路电阻', '20Ω', '20Ω'],
          ['电测', '绝缘电阻', '20MΩ', '20MΩ'],
          ['OSP', '线速', '2.5-3.5m/min', '3.0m/min'],
          ['OSP', '双氧水浓度', '13-27g/L', '24.29g/L'],
          ['OSP', '硫酸浓度', '43-57g/L', '52g/L'],
          ['OSP', '铜离子', '<10g/L', '0.95g/L'],
          ['OSP', '微蚀量', '43-77U”', '68U”'],
          ['OSP', '膜厚', '0.2-0.35um', '0.35um'],
          ['包装', '加热时间', '15-25S', '20S'],
          ['包装', '抽真空时间', '12-20S', '15S'],
          ['包装', '加热温度', '250±15℃', '240℃'],
        ]"
      />
    </div>
    <div class="card">
      <PieChart
        title="BBT不良分析"
        :pie-data="[
          { value: 4, name: '防焊异物' },
          { value: 6, name: '线路异物' },
          { value: 1, name: 'AOI外力损伤' },
          { value: 1, name: '防焊上PAD' },
        ]"
      />
    </div>
    <div class="card">
      <PieChart
        title="AVI不良分析"
        :pie-data="[
          { value: 9, name: '冲型压伤' },
          { value: 9, name: '防焊异物' },
          { value: 2, name: '防焊板面露铜' },
        ]"
      />
    </div>
    <div class="card"><DeviceStatus :devices="devices" /></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
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

const dailyOutput = ref([
  { techName: "电子测试", category: "BBT", output: 0 },
  { techName: "AVI", category: "AVI", output: 0 },
  { techName: "包装", category: "包装", output: 0 },
]);

const monthlyOutput = ref([
  { techName: "包装", category: "包装", output: 0 },
  { techName: "AVI", category: "AVI", output: 0 },
  { techName: "电子测试", category: "电测", output: 0 },
]);

// 明确指定 wip 的类型
const wip = ref<WipItem[]>([]);
const devices = [
  { name: "1#测试机", status: 1 },
  { name: "2#测试机", status: 1 },
  { name: "3#测试机", status: 3 },
  { name: "4#测试机", status: 3 },
  { name: "5#测试机", status: 3 },
  { name: "6#测试机", status: 3 },
  { name: "7#测试机", status: 3 },
  { name: "8#测试机", status: 3 },

  { name: "1#飞针机", status: 1 },
  { name: "2#飞针机", status: 3 },
  { name: "3#飞针机", status: 3 },
  { name: "4#飞针机", status: 3 },
  { name: "5#飞针机", status: 3 },

  { name: "1#OSP线", status: 1 },
  { name: "2#OSP线", status: 3 },

  { name: "1#AVI机", status: 1 },
  { name: "2#AVI机", status: 3 },

  { name: "1#VRS", status: 1 },
  { name: "2#VRS", status: 1 },
  { name: "3#VRS", status: 1 },
  { name: "4#VRS", status: 1 },
  { name: "5#VRS", status: 3 },
  { name: "6#VRS", status: 3 },

  { name: "包装机", status: 1 },
  { name: "粘尘机", status: 1 },
];

onMounted(() => {
  fetchDailyOutput();
  fetchMonthlyOutput();
  fetchWip();
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
</script>

<style scoped lang="scss">
.BBT-content {
  width: 100%;
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
