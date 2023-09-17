<template>
    <DefaultContainer>
        <h1>Todo List</h1>

        <form-add-todo
            @new-todo="handleNewTodo"
            :todoToEdit="todoToEdit"
        ></form-add-todo>

        <todo-list
            :todos="todos"
            @delete-todo="handleDeleteTodo"
            @edit-todo="handleEditTodo"
        ></todo-list>
    </DefaultContainer>
</template>

<script>
import FormAddTodo from "./components/FormAddTodo.vue";
import TodoList from "./components/TodoList.vue";
import DefaultContainer from "./components/UI/DefaultContainer.vue";

export default {
    components: { DefaultContainer, FormAddTodo, TodoList },

    data() {
        return {
            todos: [],
            todoToEdit: null,
        };
    },

    methods: {
        handleNewTodo(newTodo) {
            this.todos.unshift(newTodo);
        },

        handleDeleteTodo(todoId) {
            this.todos = this.todos.filter((todo) => todo.id !== todoId);
        },

        handleEditTodo(todo) {
            this.todoToEdit = todo;

            this.todos = this.todos.filter(({ id }) => id !== todo.id);
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #f8f7f4;
    color: #212121;
    font-family: "Poppins", sans-serif;
    display: grid;
    place-items: center;
    padding-block: 4rem;
}

input,
button {
    font: inherit;
    border: none;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
}
</style>
