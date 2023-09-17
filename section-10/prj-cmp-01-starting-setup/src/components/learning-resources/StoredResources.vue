<template>
  <ul>
    <LearningResource v-for="resource in storedResources" :key="resource.id" :resource="resource" />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: { LearningResource },
  inject: ['storedResources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
