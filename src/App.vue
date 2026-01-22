<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useThemeStore } from "@/stores/theme";

const route = useRoute();
const themeStore = useThemeStore();

// 初始化主题
themeStore.initTheme();

onMounted(() => {
  console.log("=========route==========", route);
});
</script>

<template>
  <div class="app-container w-screen h-screen">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/theme.scss" as theme;
.app-container {
  @include theme.theme-bg;
  @include theme.theme-text;
  @include theme.theme-box-shadow;
  @include theme.theme-border;
  transition: background-color 0.3s;
}
</style>
