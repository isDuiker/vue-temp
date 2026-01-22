<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
// 引入主题颜色变量
@use "@/styles/mixins" as mixins;

.card {
  height: 100%;
  border: 1px solid;
  @include mixins.theme-border;
  border-radius: 8px;
  box-shadow: 0 0 2px 0;
  padding: 12px;
}
</style>
