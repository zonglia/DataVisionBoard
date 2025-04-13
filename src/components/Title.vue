<template>
  <div class="title">
    <div>
      <div><dv-decoration8 style="width: 100%; height: 1.3rem" /></div>
      <div class="title-content">
        <h2>{{ title }}</h2>
        <dv-decoration5 :dur="2" style="width: 50%; height: 0.5rem" />
      </div>
      <div>
        <dv-decoration8
          :reverse="true"
          style="width: 100%; height: 1.3rem; float: right"
        />
      </div>
    </div>
    <div>
      <div>
        <h3 v-show="process">
          <SvgIcon name="tool" color="#409eff" size="0.5rem" />工序：{{
            process
          }}
        </h3>
      </div>
      <div class="buttons-container">
        <!-- 默认首页按钮 -->
        <dv-button
          v-if="showHomeButton"
          :bg="homeButton.bg"
          :font-color="homeButton.fontColor"
          :border="homeButton.border"
          @click="goToHome"
        >
          {{ homeButton.text }}
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
          {{ button.text }}
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
  text: "首页",
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
  width: 100%;
  height: 100%;
  display: flex; // 启用弹性布局
  flex-direction: column; // 垂直排列
  > div:nth-child(1) {
    flex: 7;
    // background-color: red;
    display: flex; // 启用弹性布局
    justify-content: space-between; // 子元素均匀分布（两侧贴边，中间居中）
    > div:nth-child(1) {
      flex: 2;
    }
    > div:nth-child(2) {
      flex: 6;
      display: flex; /* 启用弹性布局 */
      flex-direction: column; /* 子元素垂直排列 */
      align-items: center;
      justify-content: center;
    }
    > div:nth-child(3) {
      flex: 2;
    }

    .title-content {
      // background-color: red;
      text-align: center;
      h2 {
        margin: 0; // 清除默认边距
        font-size: 0.5rem;
        padding-top: 0.5rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  > div:nth-child(2) {
    flex: 3;
    // background-color: blue;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
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
  }
}

:deep(.dv-decoration-8) {
  polyline {
    stroke: #02f2f6;
    stroke-width: 2;
  }
}

:deep(.dv-decoration-5) {
  polyline {
    stroke: #02f2f6;
    stroke-width: 2;
  }
}
</style>
