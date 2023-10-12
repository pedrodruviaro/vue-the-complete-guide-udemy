<template>
  <button @click="inc">Increment</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

console.log(store);

function inc() {
  store.dispatch('increment');
}
</script>
