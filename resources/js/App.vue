<template>
  <div>
    <h1 class="text-red-400 text-4xl font-bold">{{ this.getCounter }}</h1>
    <button @click="increment">Increment</button>

    <h1>{{ data }}</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from './Pinia/stores/useCounterStore.pinia';

export default {
  computed: {
    ...mapState(useCounterStore, ['getCounter']),
    data() {
      return localStorage.getItem('message');
    }
  },

  methods: {
    ...mapActions(useCounterStore, ['increment']),
  }
}
</script>