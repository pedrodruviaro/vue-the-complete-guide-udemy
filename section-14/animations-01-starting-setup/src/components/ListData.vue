<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model="newUser" ref="newUserInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manuel', 'Julie', 'John', 'Angela', 'Miguelito'],
      newUser: '',
    };
  },

  methods: {
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },

    addUser() {
      this.users.unshift(this.newUser);
      this.newUser = '';
      this.$refs.newUserInput.focus();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  gap: 0.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

li {
  padding: 0.75rem;
  background-color: #444;
  border: 1px solid #888;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 500ms ease-in;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 500ms ease-out;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 1000ms ease;
}
</style>
