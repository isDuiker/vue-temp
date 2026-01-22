// 集中管理主题状态并同步到DOM属性
import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: "dark",
  }),
  actions: {
    initTheme() {
      document.documentElement.setAttribute("data-theme", this.currentTheme);
      if (this.currentTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    toggleTheme() {
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", this.currentTheme);
      if (this.currentTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
