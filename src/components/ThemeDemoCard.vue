<script setup>
import { useThemeStore } from "@/stores/index";
const themeStore = useThemeStore();
</script>
<template>
  <div class="card">
    <h3 class="title">主题演示卡片</h3>
    <p class="content">当前主题: {{ themeStore.currentTheme }}</p>
  </div>
</template>
<style scoped lang="scss">
.card {
  padding: 16px;
  // 只要不写，可以继承父级的
  // @include theme.theme-bg;
  border: 1px solid;
  // @include theme.theme-property("border-color", "border-color");
  .title {
    // @include theme.theme-text;
    margin-bottom: 8px;
  }
}
</style>
