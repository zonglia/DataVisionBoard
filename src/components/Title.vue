<template>
  <div class="title">
    <el-row class="title-content">
      <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3"
        ><dv-decoration8 style="width: 100%; height: 60%"
      /></el-col>
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18" style="width: 100%">
        <h2>{{ title }}</h2>
        <dv-decoration5 dur="3" style="height: 100%" class="dv-decoration5" />
      </el-col>
      <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3"
        ><dv-decoration8 :reverse="true" style="width: 100%; height: 60%"
      /></el-col>
    </el-row>

    <div class="title-button">
      <div
        style="font-weight: 600; display: inline-flex; align-items: center"
        v-show="process"
      >
        <SvgIcon name="tool" color="#409eff" size="1.3rem" /><span style="font-size: 1.5rem;"
          >工序：{{ props.process }}</span
        >
      </div>

      <div class="buttons-container">
        <!-- 默认首页按钮 -->
        <dv-button
          v-if="showHomeButton"
          :bg="homeButton.bg"
          :font-color="homeButton.fontColor"
          :border="homeButton.border"
          @click="goToHome"
          ><span>{{ homeButton.text }}</span>
        </dv-button>
        <!-- 遍历传入的 buttons 数组，渲染多个按钮 -->
        <dv-button
          v-for="(button, index) in buttons"
          :key="index"
          :bg="button.bg"
          :font-color="button.fontColor"
          :border="button.border"
          @click="handleButtonClick(index)"
        >
          <span>{{ button.text }}</span>
        </dv-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  process: {
    type: String,
    default: "", // 默认值为空则不显示
  },
  buttons: {
    type: Array as () => Array<{
      bg?: boolean;
      fontColor?: string;
      border?: string;
      text: string;
      route?: string;
    }>,
    default: () => [],
  },
  showHomeButton: {
    type: Boolean,
    default: true,
  },
});
// 默认首页按钮配置
const homeButton = {
  bg: false,
  fontColor: "#409eff",
  border: "Border1",
  text: "导航",
  route: "/",
};

// 过滤掉可能存在的重复首页按钮
const filteredButtons = computed(() => {
  return props.buttons.filter((btn) => btn.text !== homeButton.text);
});
const emit = defineEmits(["buttonClick"]);

// 处理按钮点击
const handleButtonClick = (index: number) => {
  const button = filteredButtons.value[index];
  if (button.route) {
    router.push(button.route);
  }
  emit("buttonClick", index);
};

// 跳转首页
const goToHome = () => {
  router.push(homeButton.route);
  emit("buttonClick", -1); // 传递-1表示首页按钮被点击
};
</script>

<style scoped lang="scss">
.title {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title-content {
    flex: 6;
    > :nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center; // 使内部元素水平居中

      > :nth-child(1) {
        flex: 6;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        // 桌面端布局
        @media (min-width: 992px) {
          font-size: 2rem;
        }
        @media (max-width: 992px) {
          font-size: 4rem;
        }
      }
      .dv-decoration5 {
        width: 60%;
        display: flex;
        flex: 4;

        @media (max-width: 1200px) {
          // 小屏幕断点
          width: 60%;
        }
        @media (max-width: 992px) {
          // 小屏幕断点
          width: 80%;
        }
        @media (max-width: 768px) {
          // 小屏幕断点
          width: 100%;
        }
      }
    }
    h2 {
      // 基础重置
      margin: 0; // 清除默认边距
      padding-top: 0.1rem;

      // 字体控制
      font-size: 1rem;
      font-weight: 600; // 半粗体（比bold更优雅）
      letter-spacing: 0.1rem; // 字母间距
    }
  }
}

.title-button {
  flex: 3;
  // background-color: blue;
  padding-left: 5rem;
  padding-right: 5.5rem;
  font-size: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between; // 将子元素均匀分布在容器中，第一个元素靠左，最后一个元素靠右
  align-items: center; //在垂直方向居中对齐

  /* 新增按钮容器样式，确保按钮靠右 */
  .buttons-container {
    display: flex;
    gap: 10px; /* 按钮间距 */
    margin-left: auto; /* 关键：让按钮容器靠右 */
  }
  // 桌面端布局
  @media (min-width: 992px) {
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    span {
      font-size: 0.2rem;
    }
  }
}
</style>
