<script setup>
import TCard from "@/components/TCard.vue";

const dependencies = [
  { name: "vue", version: "^3.5.22", description: "渐进式 JavaScript 框架" },
  { name: "vite", version: "^7.1.7", description: "新一代前端构建工具" },
  { name: "pinia", version: "^3.0.3", description: "Vue 的专属状态管理库" },
  { name: "vue-router", version: "4", description: "Vue.js 的官方路由" },
  {
    name: "element-plus",
    version: "^2.11.5",
    description: "基于 Vue 3 的组件库",
  },
  {
    name: "axios",
    version: "^1.13.1",
    description: "基于 promise 的网络请求库",
  },
  { name: "tailwindcss", version: "^4.1.16", description: "原子化 CSS 框架" },
];

const devDependencies = [
  { name: "sass", version: "^1.93.2", description: "CSS 预处理器" },
  {
    name: "unplugin-auto-import",
    version: "^20.3.0",
    description: "自动导入 API",
  },
  {
    name: "unplugin-vue-components",
    version: "^30.0.0",
    description: "自动导入组件",
  },
];
</script>

<template>
  <TCard>
    <div class="about-container">
      <div class="header-section">
        <h2>关于项目</h2>
        <p>
          Vue Temp 是一个基于 Vue 3、Vite 和 Element Plus 的轻量级后台管理模板。
          旨在提供简洁、高效的开发体验，内置了常用的功能模块和工程化配置。
        </p>
      </div>

      <el-divider content-position="left">生产环境依赖</el-divider>

      <el-descriptions border :column="3">
        <el-descriptions-item
          v-for="item in dependencies"
          :key="item.name"
          :label="item.name"
          label-class-name="my-label"
          class-name="my-content"
        >
          <el-tag size="small">{{ item.version }}</el-tag>
          <div class="desc-text">{{ item.description }}</div>
        </el-descriptions-item>
      </el-descriptions>

      <el-divider content-position="left">开发环境依赖</el-divider>

      <el-descriptions border :column="3">
        <el-descriptions-item
          v-for="item in devDependencies"
          :key="item.name"
          :label="item.name"
        >
          <el-tag type="info" size="small">{{ item.version }}</el-tag>
          <div class="desc-text">{{ item.description }}</div>
        </el-descriptions-item>
      </el-descriptions>

      <div class="footer-info">
        <p>Copyright © 2026 Vue Temp. All Rights Reserved.</p>
      </div>
    </div>
  </TCard>
</template>

<style scoped lang="scss">
@use "@/styles/mixins.scss" as mixins;
.about-container {
  .header-section {
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
      margin-bottom: 16px;
      color: var(--el-text-color-primary);
    }
    p {
      font-size: 14px;
      line-height: 1.6;
      max-width: 800px;
      color: var(--el-text-color-regular);
    }
  }
  .desc-text {
    margin-top: 4px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
  .footer-info {
    margin-top: 40px;
    text-align: center;
    color: var(--el-text-color-secondary);
    font-size: 12px;
  }
}
</style>
