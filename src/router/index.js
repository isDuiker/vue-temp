import { createRouter, createWebHistory } from "vue-router";
import { STATIC_ROUTES } from "./routes";
// 创建路由实例
export const router = createRouter({
  history: createWebHistory(),
  routes: STATIC_ROUTES,
});
// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = true;
  if (isLogin || to.fullPath === "/login") {
    next();
  } else {
    next("/login");
  }
});
