import { createApp } from "vue";
import { createPinia } from "pinia";
import website from "@/config/website";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.website = website; // 全局注册
app.use(pinia);
app.mount("#app");
