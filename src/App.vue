<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
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
  @include theme.theme-border;
  @include theme.theme-box-shadow;
  transition: background-color 0.3s;
}
</style>
