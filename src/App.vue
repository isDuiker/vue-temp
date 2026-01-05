<script setup>
import { useThemeStore } from "@/stores/index";
import ThemeDemoCard from "@/components/ThemeDemoCard.vue";
const themeStore = useThemeStore();
</script>

<template>
  <div class="app-container w-screen h-screen">
    <button class="border p-2 my-1" @click="themeStore.toggleTheme">
      切换主题
    </button>
    <ThemeDemoCard />
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/theme.scss" as theme;
.app-container {
  @include theme.theme-bg;
  @include theme.theme-text;
  transition: background-color 0.3s;
}
</style>
