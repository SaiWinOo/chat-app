<template>
  <div>
    <h1>{{ this.getCounter }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from './Pinia/stores/useCounterStore.pinia';

export default {
  computed: {
    ...mapState(useCounterStore, ['getCounter']),
  },

  methods: {
    ...mapActions(useCounterStore, ['increment']),
  }
}
</script>