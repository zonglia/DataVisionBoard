<template>
  <div class="BBT-content">
    <div class="card">
      <Attendance :attendance="14" :totalStaff="14" />
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
          (title:string) => {
            handleRefresh(title);
          }
        "
      />
    </div>

    <div class="card">
      <DoubleCurve
        title="BBT良率统计"
        svg-name="yield"
        :categories="BBTYield.map((item) => item.date)"
        :series-data="[
          {
            name: '一次良率(%)',
            value: BBTYield.map((item) => item.firstYield),
          },
          {
            name: '最终良率(%)',
            value: BBTYield.map((item) => item.finalYield),
          },
        ]"
        @refresh="handleRefresh"
      />
    </div>
    <div class="card">
      <DoubleCurve
        title="AVI良率统计"
        svg-name="yield"
        :categories="AVIYield.map((item) => item.date)"
        :series-data="[
          {
            name: '一次良率(%)',
            value: AVIYield.map((item) => item.firstYield),
          },
          {
            name: '最终良率(%)',
            value: AVIYield.map((item) => item.finalYield),
          },
        ]"
        @refresh="handleRefresh"
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
        :pie-data="BBTScrap"
        @refresh="handleRefresh"
      />
    </div>
    <div class="card">
      <PieChart
        title="AVI不良分析"
        :pie-data="AVIScrap"
        @refresh="handleRefresh"
      />
    </div>
    <div class="card"><DeviceStatus :devices="devices" /></div>
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
import { getScrapDaily } from "@/api/scrap/index.ts";
import { getYield } from "@/api/etest/index.ts";
import { getAVIYield } from "@/api/avi/index.ts";
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

const dailyScrap = ref<
  Array<{ name: string; value: number; techName: string }>
>([]);

const BBTScrap = ref<Array<{ name: string; value: number; techName: string }>>(
  []
);
const BBTYield = ref<
  Array<{ date: string; firstYield: number; finalYield: number }>
>([]);

const AVIYield = ref<
  Array<{ date: string; firstYield: number; finalYield: number }>
>([]);
const AVIScrap = ref<Array<{ name: string; value: number; techName: string }>>(
  []
);

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

onMounted(async () => {
  await fetchDailyOutput(); // 等待数据加载
  await fetchMonthlyOutput();
  await fetchWip();
  await fetchDailScrap();
  await fetchBBTYield();
  await fetchAVIYield();
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

const fetchDailScrap = async () => {
  // 确保 dailyScrap 初始为空数组
  if (dailyScrap.value.length > 0) {
    dailyScrap.value = [];
  }
  for (const item of dailyOutput.value) {
    try {
      const res = await getScrapDaily(item.techName.trim());

      if (res.code === 200 && res.data?.length > 0) {
        // 遍历 API 返回的数据，逐个添加到 dailyScrap 数组中
        res.data.forEach((apiItem) => {
          dailyScrap.value.push({
            name: apiItem.bugName.trim(),
            value: Number(apiItem.sunit),
            techName: item.techName.trim(), // 保留对应的工序名称
          });
        });
      }
    } catch (error) {
      ElMessage.error("获取BBT不良分析失败");
    }
  }
  console.log("BBT不良分析数据获取完成", dailyScrap.value);
  BBTScrap.value = dailyScrap.value.filter(
    (item) => item.techName === "电子测试"
  );

  AVIScrap.value = dailyScrap.value.filter((item) => item.techName === "AVI");
};

const fetchBBTYield = async () => {
  try {
    const res = await getYield("电子测试");
    if (res.code === 200 && res.data?.length > 0) {
      BBTYield.value = res.data.map((item) => {
        // 转换日期格式：从 "2025-04-23" 到 "4/23"
        const date = new Date(item.chkDate);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;

        return {
          date: formattedDate, // 直接存储格式化后的日期
          firstYield: parseFloat(item.firstPassYield),
          finalYield: parseFloat(item.finalYield),
        };
      });

      BBTYield.value = BBTYield.value.slice(0, 18);
    }
  } catch (error) {
    ElMessage.error("获取BBT良率数据失败!");
  }
};
const fetchAVIYield = async () => {
  try {
    const res = await getAVIYield("AVI");
    if (res.code === 200 && res.data?.length > 0) {
      AVIYield.value = res.data.map((item) => {
        // 转换日期格式：从 "2025-04-23" 到 "4/23"
        const date = new Date(item.chkDate);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;

        return {
          date: formattedDate, // 直接存储格式化后的日期
          firstYield: parseFloat(item.firstPassYield),
          finalYield: parseFloat(item.finalYield),
        };
      });

      BBTYield.value = BBTYield.value.slice(0, 18);
      console.log("AVI良率数据获取成功", BBTYield.value);
    }
  } catch (error) {
    ElMessage.error("获取AVI良率数据失败!");
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
    case "BBT良率统计":
      console.log("执行BBT良率统计数据的刷新");
      fetchBBTYield();
      break;
    case "AVI良率统计":
      console.log("执行AVI良率统计数据的刷新");
      fetchAVIYield;
      break;
    case "BBT不良分析":
      console.log("执行BBT不良分析数据的刷新");
      fetchDailScrap;
      break;
      case "AVI不良分析":
      console.log("执行AVI不良分析数据的刷新");
      fetchDailScrap;
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
