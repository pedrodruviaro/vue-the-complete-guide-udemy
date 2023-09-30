<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },

  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
