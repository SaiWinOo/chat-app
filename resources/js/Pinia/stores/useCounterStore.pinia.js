import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 0,
    }
  },

  getters: {
    getCounter: (state) => state.counter,
  },

  actions: {
    increment() {
      this.counter++;
    }
  }
});