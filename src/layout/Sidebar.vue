<template>
  <aside class="sidebar">
    <el-menu
      :default-active="route.path"
      class="sidebar-menu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="false"
      :collapse-transition="false"
      router
    >
      <sidebar-item v-for="item in menuItems" :key="item.path" :item="item" />
    </el-menu>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";

const route = useRoute();

const variables = {
  menuBg: "#304156",
  menuText: "#bfcbd9",
  menuActiveText: "#1890ff",
};

// 菜单数据
const menuItems = ref([
  { path: "/", title: "首页" },
  {
    title: "关于",
    children: [
      { path: "/about", title: "我们" },
      { path: "/login", title: "登录" },
    ],
  },
  {
    path: "/process-monitor",
    title: "过程监控",
    children: [
      { path: "/air-quality", title: "空气质量监测" },
      { path: "/pest-monitor", title: "虫情监测" },
      { path: "/nitrogen", title: "充氮监测" },
      { path: "/power", title: "动力工况监测" },
    ],
  },
  { path: "/pest-calibration", title: "虫情校准" },
  {
    path: "/pest-management",
    title: "虫情管理",
    children: [
      { path: "/monthly-summary", title: "月度虫情汇总" },
      { path: "/yearly-summary", title: "年度虫情汇总" },
    ],
  },
  { path: "/warning", title: "预警报警" },
  {
    path: "/strategy",
    title: "策略中心",
    children: [{ path: "/special-tech", title: "专项技术保障措施" }],
  },
  {
    path: "/task",
    title: "任务管理",
    children: [{ path: "/emergency-chemical", title: "应急化学处理" }],
  },
  {
    path: "/config",
    title: "配置管理",
    children: [{ path: "/railway-device", title: "轨道设备" }],
  },
]);
</script>

<style scoped lang="scss">
@use "@/styles/variables.scss" as variables;

.sidebar {
  width: 180px;
  background-color: #304156;
  height: 100%;
  overflow-y: auto;

  // 隐藏原生滚动条但保持滚动功能 (可选)
  &::-webkit-scrollbar {
    width: 0;
  }
}

.sidebar-menu {
  border-right: none;

  &:not(.el-menu--collapse) {
    width: 180px;
  }

  // 选中菜单整行高亮
  :deep(.el-menu-item.is-active) {
    background-color: variables.$color-primary;
    color: #ffffff;

    span {
      color: #ffffff;
    }
  }
}
</style>
