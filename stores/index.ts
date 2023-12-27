// Example using Composition API
import { defineStore } from "pinia";

export const useLocalStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };

    const isDarkActive = ref(false);
    const toggleDarkMode = (val: boolean) => {
      isDarkActive.value = val;
    };
    return {
      count,
      isDarkActive,
      increment,
      decrement,
      toggleDarkMode,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
