<template>
  <h2>{{ counter }}</h2>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const counter = computed(() => {
  return store.getters.counter;
});
</script>
