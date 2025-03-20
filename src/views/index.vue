<template>
  <div class="container">
    <div class="header">
      <Title />
    </div>

    <div class="main">
      <div>
        <scrollboard />
        <scrollboard />
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "./Title.vue";
import scrollboard from "./chart/scrollboard.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .header {
  }
  .main {
    width: 100%;
    height: 100%;
    display: grid;

    grid-template-columns: 1fr 4fr;

    grid-template-rows: 3fr 2fr;
    div {
      // background-color: red;
      height: 100%;
      width: 100%;
    }
    div:nth-child(1) {
      grid-row: 1 /3;
      // background-color: red;
    }
  }
}
</style>
