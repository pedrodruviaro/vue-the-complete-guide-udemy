<template>
  <h1>Counter: {{ counter }}</h1>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    },
  },
};
</script>
