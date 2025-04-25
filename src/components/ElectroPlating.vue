<template>
  <div class="electro-plating-container">
    <div>
      <Title
        title="N2工厂智能化数字化管控"
        process="电镀"
        :buttons="buttons"
        @button-click="handleButtonClick"
      />
    </div>

    <div class="electro-main">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['ProcessIndicators']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const buttons = ref([
  {
    bg: false,
    fontColor: "#e18a3b",
    border: "Border1",
    text: "指示查询",
    route: "/electroPlating/processIndicators", // 配置路由路径
  },
  {
    bg: false,
    fontColor: "#e18a3b",
    border: "Border1",
    text: "数据大屏",
    route: "/electroPlating/main", // 配置路由路径
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
.electro-plating-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(../assets/image/bg6.jpg) no-repeat center;
  background-size: cover;
  position: relative; // 新增定位
  // 新增模糊背景层
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/image/bg6.jpg) no-repeat center;
    background-size: cover;
    filter: blur(4px); // 模糊强度
    z-index: 0; // 置于底层
  }
  // 保证内容层在模糊层之上
  > * {
    position: relative;
    z-index: 1;
  }

  > div:nth-child(1) {
    flex: 2;
  }
  > div:nth-child(2) {
    flex: 8;
    padding: 0.5rem;
    padding-top: 0;
    box-sizing: border-box;
  }
}
</style>
