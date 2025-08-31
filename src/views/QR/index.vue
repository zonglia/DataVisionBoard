<template>
  <div class="qr-container">
    <div class="header">
      <span>{{ route.query.pdctno }}#</span>
      <span>生产型号 &nbsp;{{ displayPdctno }}</span>
    </div>

    <div class="table-content">
      <!-- 表头 -->
      <div class="table-header">
        <div class="header-cell" style="width: 8%;border-right: 1px solid #ccc;">序号</div>
        <div class="header-cell" style="width: 23%">过程</div>
        <div class="header-cell" style="width: 23%">设定值</div>
        <div class="header-cell" style="width: 23%">控制范围</div>
        <div class="header-cell" style="width: 23%">测量方法</div>
      </div>
      <!-- 表格内容 -->
      <div class="table-body">
        <div class="table-row" v-for="(item, index) in tableData" :key="index">
          <div class="table-cell" style="width: 8%">{{ item.no }}</div>
          <div class="table-cell" style="width: 23%">{{ item.process }}</div>
          <div class="table-cell" style="width: 23%">{{ item.setting }}</div>
          <div class="table-cell" style="width: 23%">
            {{ item.range }}
          </div>
          <div class="table-cell" style="width: 23%">{{ item.fun }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router"; // 引入 useRoute
import { getGerber } from "@/api/gerber/index"; // 假设有一个 API 函数获取 Gerber 数据
import type { GerberItem } from "@/api/gerber/type"; // 假设有一个类型定义文件

const route = useRoute(); // 获取路由信息
const tableData = ref<GerberItem[]>([]); // GerberItem数组

// 根据 URL 参数加载数据
onMounted(() => {
  //  http://localhost:5173/qrCode?pdctno=133
  if (route.query.pdctno) {
    // 假设 pdctno 是产品编号
    console.log("产品编号:", route.query.pdctno);
    fetchData(); // 调用获取数据的函数
  }
});
// 计算属性确定显示的pdctno（优先使用表格数据中的）
const displayPdctno = computed(() => {
  return tableData.value[0]?.pdctno || route.query.pdctno || "无数据";
});
// 获取数据
const fetchData = async () => {
  try {
    // 实际项目中替换为真实API地址
    const response = await getGerber(route.query.pdctno as string);

    if (response.code === 200) {
      // 如果有产品编号，更新标题

      // 清空并更新表格数据
      tableData.value = response.data;
      console.log("获取到的Gerber数据:", tableData.value);
    } else {
      console.error("API请求失败:", response.msg);
    }
  } catch (error) {
    console.error("获取数据失败:", error);
  }
};
</script>

<style scoped lang="scss">
.qr-container {
  width: 100%;
  height: 100vh;
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
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    font-weight: bold;
    // 桌面端布局
    @media (min-width: 992px) {
      height: 5rem;
      font-size: 1rem;
    }
    // 移动端
    @media (max-width: 992px) {
      height: 10rem;
      font-size: 4rem;
    }
  }
  .table-content {
    // 修改布局方式
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden; //父容器溢出隐藏
    // 桌面端布局
    @media (min-width: 992px) {
      height: calc(100vh - 5rem); // 减去顶部导航栏高度
    }
    // 移动端
    @media (max-width: 992px) {
      height: calc(100vh - 10rem); // 减去顶部导航栏高度
    }
    .table-header {
      display: flex;
      font-weight: bold;
      background-color: #ededed;
      color: #000;
      .header-cell {
        line-height: 3rem;
        align-items: center;
        text-align: center;
        // 桌面端布局
        @media (min-width: 992px) {
          font-size: 1rem;
        }
        // 移动端
        @media (max-width: 992px) {
          font-size: 2rem;
        }
      }
    }
    .table-body {
      flex: 1;
      overflow-y: auto; // 内容区域垂直滚动
      cursor: pointer;
      .table-row {
        display: flex;
        border-bottom: 1px solid #ccc;
        .table-cell {
          overflow: hidden;
          line-height: 5rem;
          text-align: center;
          // 桌面端布局
          @media (min-width: 992px) {
            font-size: 1rem;
          }
          // 移动端
          @media (max-width: 992px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
}

/* 滚动条样式 */
.table-body::-webkit-scrollbar {
  width: 6px;
}

.table-body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.table-body::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
