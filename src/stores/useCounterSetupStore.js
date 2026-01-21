// setup写法
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useCounterSetupStore = defineStore("counterSetup", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };
  return { count, name, doubleCount, increment };
});
