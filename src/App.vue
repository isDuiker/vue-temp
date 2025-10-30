<template>
  <h1>Hello World</h1>
  <!-- 你可以在组件模板中使用 $route 来访问当前的路由对象。 -->
  <p><strong>Current route path:</strong>{{ $route.path }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<script setup></script>
<style scoped></style>
