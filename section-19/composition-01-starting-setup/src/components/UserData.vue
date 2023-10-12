<template>
  <h1>Inject: {{ myValue }}</h1>
  <h2>{{ username }}</h2>
  <h3>{{ age }}</h3>
  <p>{{ fulldata }}</p>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue';

const props = defineProps({
  username: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

const fulldata = computed(() => {
  return `${props.username} has ${props.age}`;
});

const myValue = inject('value');
</script>
