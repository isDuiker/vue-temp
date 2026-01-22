import { RouterView } from "vue-router";

export const STATIC_ROUTES = [
  {
    path: "/",
    redirect: "/home",
  },
  // 布局页
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "views" */ "@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页" },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/home/index.vue"),
      },
      {
        path: "/about",
        name: "about",
        meta: { title: "关于项目" },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/about/index.vue"),
      },
      {
        path: "/login",
        name: "login",
        meta: { title: "登录页面", hidden: true, noLogin: true },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/login/index.vue"),
      },
      // 系统管理
      {
        path: "/system",
        name: "system",
        component: RouterView,
        redirect: "/system/user",
        meta: { title: "系统管理" },
        children: [
          {
            path: "/system/user",
            name: "user",
            meta: { title: "用户管理" },
            component: () => import("@/views/system/user/index.vue"),
          },
          {
            path: "/system/role",
            name: "role",
            meta: { title: "角色管理" },
            component: () => import("@/views/system/role/index.vue"),
          },
          {
            path: "/system/menu",
            name: "menu",
            meta: { title: "菜单管理" },
            component: () => import("@/views/system/menu/index.vue"),
          },
        ],
      },
      // 功能组件
      {
        path: "/feature",
        name: "feature",
        component: RouterView,
        redirect: "/feature/table",
        meta: { title: "功能组件" },
        children: [
          {
            path: "/feature/table",
            name: "table",
            meta: { title: "综合表格" },
            component: () => import("@/views/feature/table/index.vue"),
          },
          {
            path: "/feature/form",
            name: "form",
            meta: { title: "复杂表单" },
            component: () => import("@/views/feature/form/index.vue"),
          },
        ],
      },
      // 测试页面
      {
        path: "/test",
        name: "test",
        meta: { title: "测试页面" },
        component: () => import("@/views/test.vue"),
      },
    ],
  },
  // 404页面
  {
    path: "/error/404",
    name: "404",
    meta: { title: "404", hidden: true },
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/error/404",
    meta: { hidden: true },
  },
];
