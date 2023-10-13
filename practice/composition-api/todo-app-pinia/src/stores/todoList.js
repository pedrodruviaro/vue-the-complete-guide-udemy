import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [],
      id: 0
    };
  },

  getters: {},

  actions: {
    addTodo(item) {
      this.todoList.push({ item, completed: false, id: this.id++ });
    },

    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
    },

    toggleCompleted(todoId) {
      const todo = this.todoList.find((todo) => todo.id === todoId);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
