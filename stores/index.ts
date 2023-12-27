// Example using Composition API
import { defineStore } from "pinia";

export const useLocalStore = defineStore(
  "store",
  () => {
    const isDarkActive = ref(false);
    const toggleDarkMode = (val: boolean) => {
      isDarkActive.value = val;
    };
    return {
      isDarkActive,
      toggleDarkMode,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
