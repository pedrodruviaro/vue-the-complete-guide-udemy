<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>

  <button @click="saveChange">Save Data</button>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],

  data() {
    return {
      changesSaved: false,
    };
  },

  methods: {
    saveChange() {
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('Users List Component');
    console.log(to, from);

    next();
  },

  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const wantesToLeave = confirm('Are you sure? You got unsaved changes');

      next(wantesToLeave);
    }
  },

  unmounted() {
    console.log('Unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
