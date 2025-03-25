<template>
  <ECharts :options="chartOptions" height="400px" />
</template>

<script setup>
import { ref } from "vue";
import ECharts from "@/components/ECharts.vue";
// 定义树形图数据结构
const data = {
  name: "悦虎晶芯江西工厂",

  children: [
    {
      name: "生产部(经理：冉启胜)",
      label: {
        width: 160, // 加宽文本框
        overflow: "break", // 保持自动折行
      },
      children: [
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
      ],
    },

    {
      name: "工艺/品质部(经理：张伟)",
      label: {
        width: 180, // 加宽文本框
        overflow: "break", // 保持自动折行
      },
      children: [
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
        {
          name: "钻孔",
          label: {
            width: 30, // 加宽文本框
            formatter: (params) => params.name.split("").join("\n"),
          },
          children: [
            {
              name: "胡元兵",
              label: {
                width: 30, // 加宽文本框
                formatter: (params) => params.name.split("").join("\n"),
              },
            },
          ],
        },
      ],
    },
  ],
};

const chartOptions = ref({
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "tree",
      id: 0,
      name: "tree1",
      data: [data],
      top: "10%",
      left: "10%",
      bottom: "20%",
      right: "10%",
      avoidLabelOverlap: true, //防止标签重叠
      roam: true, //移动+缩放  'scale' 或 'zoom'：只能够缩放。 'move' 或 'pan'：只能够平移。
      scaleLimit: {
        //缩放比例
        min: 0.7, //最小的缩放值
        max: 4, //最大的缩放值
      },
      layout: "orthogonal", //树图布局，orthogonal水平垂直方向，radial径向布局 是指以根节点为圆心，每一层节点为环，一层层向外
      orient: "TB", //树形方向  TB为上下结构  LR为左右结构
      // nodePadding: 100,//结点间距 （发现没用）
      //layerPadding: 30,//连接线长度 （发现没用）
      symbol: "circle", //图形形状  rect方形  roundRect圆角 emptyCircle圆形 circle实心圆
      symbolSize: 14, //状态大小
      edgeShape: "polyline", //线条类型  curve曲线
      initialTreeDepth: 3, //初始展开的层级
      expandAndCollapse: true, //子树折叠和展开的交互，默认打开
      lineStyle: {
        //结构线条样式
        width: 0.7,
        color: "#1E9FFF",
        type: "broken",
      },
      label: {
        //节点文本样式
        normal: {
          backgroundColor: "#81c5f7",
          position: "bottom",
          verticalAlign: "middle", //文字垂直对齐方式
          align: "center",
          borderColor: "#1E9FFF",
          color: "#fff",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          height: 40,
          width: 100,
          offset: [0, 30], //节点文字与圆圈之间的距离
          fontSize: 15,
          // 节点文本阴影
          shadowBlur: 10,
          shadowColor: "rgba(0,0,0,0.25)",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
        },
      },
      leaves: {
        //叶子节点文本样式
        label: {
          //backgroundColor: '#81c5f7',
          backgroundColor: "#fff",
          color: "#333",
          position: "bottom",
          rotate: 0, //标签旋转。
          verticalAlign: "middle",
          align: "center",
          offset: [0, 20], //节点文字与圆圈之间的距离
          //或者
          overflow: "break", //break为文字折行，  truncate为文字超出部分省略号显示
          lineOverflow: "truncate", //文字超出高度后 直接截取
        },
      },
    },
  ],
});
</script>
