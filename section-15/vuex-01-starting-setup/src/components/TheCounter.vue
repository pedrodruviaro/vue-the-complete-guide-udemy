<template>
  <h3>Counter - final: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['finalCounter']),
  },
};
</script>
