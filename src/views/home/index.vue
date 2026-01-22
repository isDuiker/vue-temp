<script setup>
import TCard from "@/components/TCard.vue";
</script>
<template>
  <TCard>
    <div class="home-container">
      <div class="hero-section">
        <h1>Vue 3 + Vite + Element Plus 快速开发模板</h1>
        <p class="subtitle">
          开箱即用的中后台前端解决方案，内置丰富的功能和最佳实践。
        </p>
        <div class="features">
          <div class="feature-item">
            <el-icon :size="40" color="#42b883"><ElementPlus /></el-icon>
            <h3>最新技术栈</h3>
            <p>基于 Vue 3、Vite、Pinia、Element Plus 等最新技术栈构建。</p>
          </div>
          <div class="feature-item">
            <el-icon :size="40" color="#409eff"><Brush /></el-icon>
            <h3>主题定制</h3>
            <p>内置深色/浅色主题切换，支持 CSS 变量动态调整。</p>
          </div>
          <div class="feature-item">
            <el-icon :size="40" color="#e6a23c"><SetUp /></el-icon>
            <h3>工程化规范</h3>
            <p>集成 ESLint、Prettier、Husky 等代码规范工具。</p>
          </div>
        </div>
      </div>

      <el-divider />

      <div class="system-status">
        <h2>项目概览</h2>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-statistic title="组件数量" :value="12" />
          </el-col>
          <el-col :span="6">
            <el-statistic title="页面数量" :value="5" />
          </el-col>
          <el-col :span="6">
            <el-statistic title="样式文件" :value="8" suffix="个" />
          </el-col>
          <el-col :span="6">
            <el-statistic title="当前版本" value="v1.0.0" />
          </el-col>
        </el-row>
      </div>
    </div>
  </TCard>
</template>

<style scoped lang="scss">
@use "@/styles/mixins.scss" as mixins;

.home-container {
  padding: 20px;
  text-align: center;
}

.hero-section {
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--el-text-color-secondary);
    margin-bottom: 40px;
  }
}

.features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;

  .feature-item {
    width: 250px;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s;
    border: 1px solid;
    @include mixins.theme-border;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      margin: 15px 0 10px;
      font-size: 1.2rem;
    }

    p {
      color: var(--el-text-color-regular);
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
}

.system-status {
  text-align: left;
  margin-top: 40px;

  h2 {
    margin-bottom: 20px;
  }
}
</style>
