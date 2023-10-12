<template>
    <form @submit.prevent="handleNewTodo">
        <input type="text" placeholder="Todo..." ref="todo" required />
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    props: {
        todoToEdit: {
            type: Object,
            required: false,
        },
    },
    methods: {
        handleNewTodo(event) {
            const inputTodo = this.$refs.todo;

            const newTodo = {
                todo: inputTodo.value,
                id: new Date().toISOString(),
            };

            event.target.reset();
            inputTodo.focus();

            this.$emit("new-todo", newTodo);
        },
    },

    emits: ["new-todo"],

    watch: {
        todoToEdit(prop) {
            const { todo } = prop;

            this.$refs.todo.value = todo;
            this.$refs.todo.focus();
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
}

input {
    flex: 1;
    padding-right: 0.5rem;
    padding: 0.5rem;
}

button {
    background-color: #19c1ce;
    display: grid;
    height: 100%;
    padding: 0.5rem;
    font-weight: 700;
    cursor: pointer;
}
</style>
