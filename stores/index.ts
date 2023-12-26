// Example using Composition API
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return { count, increment };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
