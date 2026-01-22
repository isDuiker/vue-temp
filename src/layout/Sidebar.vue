<template>
  <aside class="sidebar">
    <el-menu
      :default-active="route.path"
      class="sidebar-menu"
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

// 菜单数据
const menuItems = ref([
  { path: "/", title: "首页" },
  {
    title: "系统管理",
    children: [
      { path: "/user", title: "用户管理" },
      { path: "/role", title: "角色管理" },
      { path: "/menu", title: "菜单管理" },
    ],
  },
  {
    title: "功能组件",
    children: [
      { path: "/table", title: "综合表格" },
      { path: "/form", title: "复杂表单" },
    ],
  },
  {
    title: "关于",
    children: [
      { path: "/about", title: "关于项目" },
      { path: "/login", title: "登录页面" },
    ],
  },
]);
</script>

<style scoped lang="scss">
@use "@/styles/variables.scss" as variables;
@use "@/styles/mixins.scss" as mixins;

.sidebar {
  width: 180px;
  @include mixins.theme-property("background-color", "menu-bg");
  height: 100%;
  overflow-y: auto;
  padding: 10px 10px;

  // 隐藏原生滚动条但保持滚动功能 (可选)
  &::-webkit-scrollbar {
    width: 0;
  }
}

.sidebar-menu {
  border-right: none;
  @include mixins.theme-property("--el-menu-bg-color", "menu-bg");
  @include mixins.theme-property("--el-menu-text-color", "menu-text");
  @include mixins.theme-property("--el-menu-active-color", "menu-active-text");
  @include mixins.theme-property("--el-menu-hover-bg-color", "menu-active-bg");

  // 选中菜单整行高亮
  :deep(.el-menu-item.is-active) {
    @include mixins.theme-property("background-color", "menu-active-bg");
  }
}
</style>
