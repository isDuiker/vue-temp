<script setup>
import { useThemeStore } from "@/stores/index";
const themeStore = useThemeStore();
</script>
<template>
  <header class="header">
    <div class="logo">
      <img src="/favicon.svg" alt="logo" />
      <span>名称名称名称名称名称</span>
    </div>
    <div class="user-info">
      <!-- 切换主题 -->
      <el-icon :size="20" @click="themeStore.toggleTheme" class="theme-icon">
        <Sunny v-if="themeStore.currentTheme === 'dark'" />
        <Moon v-else />
      </el-icon>
      <span>管理员</span>
    </div>
  </header>
</template>
<style scoped lang="scss">
// 引入主题颜色变量
@use "@/styles/variables" as variables;
@use "@/styles/mixins" as mixins;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid;
  @include mixins.theme-border;
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    .theme-icon {
      cursor: pointer;
    }
  }
}
</style>
