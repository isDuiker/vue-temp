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
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { STATIC_ROUTES } from "@/router/routes";
import SidebarItem from "./SidebarItem.vue";

const route = useRoute();

// 从路由生成菜单数据
const menuItems = computed(() => {
  const layoutRoute = STATIC_ROUTES.find((r) => r.name === "layout");
  if (!layoutRoute || !layoutRoute.children) return [];
  return generateMenu(layoutRoute.children);
});

function generateMenu(routes) {
  const menu = [];
  routes.forEach((route) => {
    if (route.meta?.hidden) return;

    const item = {
      path: route.path,
      title: route.meta?.title || route.name || "未命名",
    };

    if (route.children && route.children.length > 0) {
      const children = generateMenu(route.children);
      if (children.length > 0) {
        item.children = children;
      }
    }

    menu.push(item);
  });
  return menu;
}
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
