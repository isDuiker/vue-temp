import { createWebHistory, createRouter } from "vue-router";
import { STATIC_ROUTES } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: STATIC_ROUTES,
});

router.beforeEach((to, from, next) => {
  // 优先验证组件是否允许未登录状态访问
  // 通过 to.meta.noLogin 验证是否允许未登录状态下，访问
  // 一般情况下，只有登录页允许未登录访问
  if (to.meta.noLogin) {
    next();
    return;
  }
  // 其次验证登录信息是否合法
  // 非法情况下，记录当前路由地址，并跳转登录页
  // 在登录成功后，跳转回记录的地址

  // 正常情况，直接跳转
  next()
});
