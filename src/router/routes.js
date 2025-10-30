import Home from "@/view/Home.vue";
import Login from "@/view/Login.vue";
import About from "@/view/About.vue";

export const STATIC_ROUTES = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/about", component: About },
];
