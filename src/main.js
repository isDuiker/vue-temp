import { createApp } from "vue";
import { router } from "@/router";
import { createPinia } from "pinia";
import website from "@/config/website";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.website = website; // 全局注册
app.use(router);
app.use(pinia);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}