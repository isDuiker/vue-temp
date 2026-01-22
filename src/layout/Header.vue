<script setup>
import { useThemeStore } from "@/stores/index";
const themeStore = useThemeStore();
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push({ name: "home" });
};
</script>
<template>
  <header class="header">
    <div class="logo" @click="goHome">
      <img src="/favicon.svg" alt="logo" />
      <span>中后台快速开发模板</span>
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
  user-select: none;
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
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
