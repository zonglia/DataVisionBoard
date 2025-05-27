<template>
  <Card :title="props.title" :svgName="props.svgName">
    <div
      style="
        text-align: center;
        font-size: 0.2rem;
        border-bottom: 0.0125rem solid #eaeefb;
      "
    >
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
        <span class="status-light" style="background-color: red;"></span>
        <span>关机</span>
      </span>
    </div>
    <div class="devices-container">
      <div v-for="(device, index) in props.devices" :key="index">
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
  </Card>
</template>

<script setup lang="ts">
interface Device {
  name: string;
  status: number; // 0:开机, 1:运行, 2:保养, 3:关机
}

const props = defineProps({
  title: {
    type: String,
    default: "设备状态",
  },
  svgName: {
    type: String,
    default: "status",
  },
  devices: {
    type: Array as () => Device[],
    default: () => [
      { name: "机器1", status: 0 },
      { name: "机器2", status: 3 },
    ],
  },
});
</script>

<style scoped lang="scss">
.devices-container {
  height: calc(100% - 0.34rem);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  font-size: 0.16rem;
  padding: 0.2rem;
  > div {
    display: inline-flex;
    align-items: center;
  }
}

.status-item {
  display: inline-flex;
  align-items: center;
  // margin: 0 0.2rem;
  color: white; /* 文字设为白色以提高对比度 */
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
  // animation: blink 0.8s infinite;
}

/* 运行 - 绿色常亮 */
.running {
  background-color: #0f0;
}

/* 保养 - 黄色常亮 */
.maintenance {
  background-color: #ff0;
}

/* 关机 - 红灯闪烁 */
.shutdown {
  background-color: #f00;
  animation: blink 0.8s infinite;
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
