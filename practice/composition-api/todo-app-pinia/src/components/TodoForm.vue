<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('');
const store = useTodoListStore();

function addTodo() {
  if (todo.value.trim() === '') {
    return;
  }

  store.addTodo(todo.value);
  todo.value = '';
}
</script>

<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
