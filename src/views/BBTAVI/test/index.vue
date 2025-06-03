<template>
  <div class="BBT-Test-content">
    <div class="card">
      <Test title="产品良率" iconSize="0.55rem" titleFontSize="0.5rem" svg-name="yield" :data="processedData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Test from "@/components/BarWithLineChart/index.vue";
import { onMounted, ref, computed } from "vue";
import { getLatest } from "@/api/test";
interface TestDataItem {
  date: string;
  productionNumber: string;
  batchNumber: string;
  employeeId: string;
  conductionResistance: number;
  insulationVoltage: number;
  insulationResistance: string;
  goodBoards: number; // 明确声明这个属性
  openCircuit: number;
  shortCircuit: number;
  openShortCircuit: number;
  total: number;
  yieldRate: number;
  startTime: string;
  endTime: string;
}

interface ApiResponse {
  msg: string;
  code: number;
  data: TestDataItem[];
}
// 处理后的数据类型
interface ProcessedDataItem {
  date: string;
  total: number;
  goodBoards: number;
}
const processedData = computed<ProcessedDataItem[]>(() => {
  return (
    apiData.value?.data?.map((item) => ({
      date: item.date?.split("T")[0] || "",
      total: item.total || 0,
      goodBoards: item.goodBoards || 0,
    })) || []
  );
});

const apiData = ref<ApiResponse>();

onMounted(() => {
  fetchLatest();
});
const fetchLatest = async () => {
  try {
    const response = await getLatest();
    console.log(response);

    apiData.value = response;
  } catch (error) {
    ElMessage.error("获取失败");
  }
};
</script>

<style scoped lang="scss">
.BBT-Test-content {
  height: 100%;
  display: grid;
  gap: 0.2rem;

  // 桌面端布局
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr); // 创建12等分的列布局，每列宽度相同
    grid-template-rows: repeat(3, 1fr);

    .card {
      grid-column: span 12; // 带有card类的卡片横跨4列（3个card正好占满12列）
      grid-row: span 3; // 带有card类的卡片横跨4列（3个card正好占满12列）
    }
  }
  @media (max-width: 992px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-auto-rows: 45%;
    grid-row: span 3; // 横跨3行
  }
}

.card {
  overflow: hidden; // 添加overflow防止图表溢出
}
</style>
