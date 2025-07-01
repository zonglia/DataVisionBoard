<template>
  <div class="BBT-container">
    <div>
      <Title
        title="N2工厂智能化数字化管控"
        process="BBT、AVI、包装"
        :buttons="buttons"
        @button-click="handleButtonClick"
      />
    </div>

    <div>
      <router-view/>
       
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Title from "@/components/Title.vue";

const router = useRouter();

const buttons = ref([
  // {
  //   bg: false,
  //   fontColor: "#e18a3b",
  //   border: "Border1",
  //   text: "产品良率",
  //   route: "/bbtAvi/test", // 配置路由路径
  // },
  {
    bg: false,
    fontColor: "#e18a3b",
    border: "Border1",
    text: "数据大屏",
    route: "/bbtAvi/main", // 配置路由路径
  },
]);

const handleButtonClick = (index: number) => {
  const button = buttons.value[index];
  console.log(`按钮 ${index} 被点击`, button.text);

  // 执行路由跳转
  if (button.route) {
    router.push(button.route);
  }

  // 其他业务逻辑
  switch (index) {
    case 0:
      console.log("执行查询数据逻辑");
      break;
    case 1:
      console.log("执行数据大屏逻辑");
      break;
  }
};
</script>

<style scoped lang="scss">
.BBT-container {
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
</style>
