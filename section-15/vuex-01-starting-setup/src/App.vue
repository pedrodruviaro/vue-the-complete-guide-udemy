<template>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increase({ value: 11 })">Increase 11</button>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    ...mapGetters(['isLoggedIn']),
  },

  methods: {
    // addOne() {
    //   this.$store.dispatch('increase', { value: 10 });

    //   // this.$store.commit({
    //   //   type: 'increase',
    //   //   value: 10,
    //   // });
    // },

    ...mapActions('counter', ['increase']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #212121;
  color: #fefefe;
}
</style>
