<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<template>
  <div>
    <ul>
      <li
        v-for="todo in todoList"
        :key="todo.id"
        @click="toggleCompleted(todo.id)"
        @dblclick="deleteTodo(todo.id)"
        :class="{ completed: todo.completed }"
      >
        {{ todo.item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>
