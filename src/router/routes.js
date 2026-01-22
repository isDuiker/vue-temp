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
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/home/index.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/about/index.vue"),
      },
      {
        path: "/login",
        name: "login",
        meta: { noLogin: true },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/login/index.vue"),
      },
      // 系统管理
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/system/user/index.vue"),
      },
      {
        path: "/role",
        name: "role",
        component: () => import("@/views/system/role/index.vue"),
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("@/views/system/menu/index.vue"),
      },
      // 功能组件
      {
        path: "/table",
        name: "table",
        component: () => import("@/views/feature/table/index.vue"),
      },
      {
        path: "/form",
        name: "form",
        component: () => import("@/views/feature/form/index.vue"),
      },
    ],
  },
];
