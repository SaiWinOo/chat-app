import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },

  getters: {
    getCounter: (state) => state.count,
  },

  actions: {
    increment() {
      this.count++;
    },
  }
});