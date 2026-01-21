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
    ],
  },
];
