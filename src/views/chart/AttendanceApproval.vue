<template>
  <div demo-bg>
    <dv-scroll-board :config="config" style="width: 100%; height: 3.8rem" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const config = reactive({
  header: ["工号", "员工", "工位类别", "工位", "在岗课别"],
  data: [
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
    ["050743", "耿少友", "", "", "B4"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  rowNum: [5],
  headerBGC: ["transparent"],
  oddRowBGC: ["transparent"],
});
</script>

<style scoped lang="scss">
:deep(.dv-scroll-board) {
  .header {
    background-color: transparent !important;
    .header-item {
      text-align: center;
    }
  }

  .rows {
    .row-item {
      .ceil {
        text-align: center;
      }
    }
  }
}
</style>
