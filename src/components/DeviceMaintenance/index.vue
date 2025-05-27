<template>
  <Card>
    <div style="height: 100%">
      <div style="text-align: center;margin: 0 0.04rem; border-bottom: 0.0125rem solid #eaeefb">
        <div style="display: inline-flex; gap: 0.6rem">
          <span class="status-item">
            <span class="booting status-light"></span>
            <span>开机</span>
          </span>
          <span class="status-item">
            <span class="running status-light"></span>
            <span>运行</span>
          </span>
          <span class="status-item">
            <span class="maintenance status-light"></span>
            <span>保养</span>
          </span>
          <span class="status-item">
            <span class="shutdown status-light"></span>
            <span>关机</span>
          </span>
        </div>
      </div>
      <div class="devices-container">
        <div v-for="(device, index) in devices" :key="index">
          <span class="status-item">
            <!-- 动态绑定指示灯类名 -->
            <span
              class="status-light"
              :class="{
                booting: device.status === 0,
                running: device.status === 1,
                maintenance: device.status === 2,
                shutdown: device.status === 3,
              }"
            ></span>
            <!-- 显示设备名称和状态文字 -->
            <span>{{ device.name }} </span>
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "@/components/Card/index.vue";
defineProps({
  devices: {
    type: Array as () => Array<{ name: string; status: number }>,
    default: () => [
      { name: "设备？", status: 0 },
      { name: "设备？", status: 1 },
    ],
  },
});
</script>

<style scoped lang="scss">
.devices-container {
  height: calc(100% - 0.4rem);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  font-size: 0.18rem;
  padding: 0.1rem;
  text-align: center;
  > div {
    display: flex;
    justify-content: flex-start; // 网格项内容左对齐
    align-items: center; // 垂直居中
    padding-left: 0.1rem; // 添加左内边距
  }
}

.status-item {
  display: inline-flex;
  align-items: center; // 确保指示灯和文字垂直对齐
  color: white;
  width: 100%; // 确保占满整个网格单元格
}
.status-light {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  // margin-right: 0.1rem;
  border-radius: 0.03rem;
  border: 0.03rem solid rgba(255, 255, 255, 0.5); /* 半透明白色边框 */
}
/* 开机 - 蓝色闪烁 */
.booting {
  background-color: #00f;
  //   animation: blink 0.8s infinite;
}
/* 运行 - 绿色常亮 */
.running {
  background-color: #0f0;
}
/* 保养 - 黄色常亮 */
.maintenance {
  background-color: #ff0;
}
/* 关机 - 红色常亮 */
.shutdown {
  background-color: #f00;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
