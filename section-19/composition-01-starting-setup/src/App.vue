<template>
  <section class="container">
    <UserData :username="user.username" :age="user.age" />
    <div>
      <input type="text" placeholder="First" v-model="firstname" />
      <input type="text" placeholder="Last" ref="lastNameInput" />
      <button @click="setLastname">Set lastname</button>
      <p>Fullname: {{ fullname }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref, watch, provide, onMounted } from 'vue';
import UserData from './components/UserData.vue';

const firstname = ref('');
const lastname = ref('');

const user = reactive({
  username: 'pedro',
  age: 28,
});

const lastNameInput = ref(null);

const fullname = computed(() => {
  return firstname.value + ' ' + lastname.value;
});

watch([firstname, lastname], (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
});

function setLastname() {
  lastname.value = lastNameInput.value.value;
}

const providedValue = ref(100);
provide('value', providedValue);

onMounted(() => {
  console.log('Hello');
});
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
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
