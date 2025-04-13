<template>
  <div style="width: 100%;height: 100%;">
    <div class="search-container">
      <el-input v-model="productNo" placeholder="例如：02S71035A0" clearable>
        <template #append>
          <el-button
            type="primary"
            :loading="loading"
            @click="queryProcessIndicators"
          >
            <SvgIcon name="search" size="16px" /> 查询
          </el-button>
        </template>
      </el-input>
    </div>

    <div class="table-container">
      <el-table
        :data="ProcessIndicators"
        border
        stripe
        height = "9rem"
        style="width: 100%"
        v-loading="loading"
        :default-sort="{ prop: 'displayOrd', order: 'ascending' }"
      >
        <el-table-column label="流程名称">
          <template #default="{ row }">
            {{ row.process.techName?.trim() }}
          </template>
        </el-table-column>
        <el-table-column prop="writer" label="编写人" width="100" />

        <el-table-column prop="auditor" label="审核人" width="100" />

        <el-table-column prop="ppqe" label="PQE" width="100" />
        <el-table-column prop="dc" label="文控" width="100" />

        <el-table-column prop="instState" label="状态" width="120">
          <template #default="{ row }">
            <el-tag :type="getStatusTagType(row.instState)">
              {{ row.instState?.trim() }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { reqProcessIndicator } from "@/api/processinstruction";
import type { ProcessIndicator } from "@/api/processinstruction/type";

const productNo = ref("02S71035A0");
const loading = ref(false);
const ProcessIndicators = ref<ProcessIndicator[]>([]);

const formatDate = (dateString: string) => {
  if (!dateString || dateString.includes("1899-12-29")) return "-";
  try {
    const date = new Date(dateString);
    return date.toLocaleString();
  } catch {
    return dateString;
  }
};

const getStatusTagType = (status: string) => {
  const s = status?.trim();
  if (s === "已上网") return "success";
  if (s === "已编写") return "warning";
  return "info";
};

const queryProcessIndicators = async () => {
  if (!productNo.value.trim()) {
    ElMessage.warning("请输入pdctno");
    return;
  }

  loading.value = true;
  try {
    const response = await reqProcessIndicator(productNo.value);
    ProcessIndicators.value = response.data;
    ElMessage.success("指示查询成功");
  } catch (error) {
    console.error("指示查询失败:", error);
    ElMessage.error("指示查询失败，请稍后重试");
    ProcessIndicators.value = [];
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.search-container {
  margin-bottom: 20px;
  width: 400px;
}

.table-container {
  margin-top: 20px;
}
</style>
