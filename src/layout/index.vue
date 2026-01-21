<script setup>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
</script>
<template>
  <div class="layout">
    <Header />
    <div class="layout-main">
      <Sidebar />
      <main class="layout-main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &-main {
    display: flex;
    flex: 1;
    overflow: hidden;
    &-content {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
    }
  }
}
</style>
