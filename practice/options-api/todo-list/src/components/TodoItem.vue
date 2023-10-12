<template>
    <div>
        <li
            v-for="todo in todos"
            :key="todo.id"
            @dblclick="markAsDone"
            :class="{ isDone: isDone }"
        >
            <p>{{ todo.todo }}</p>
            <div>
                <button
                    class="edit"
                    @click="editTodo(todo)"
                    :disabled="isDone === true"
                >
                    E
                </button>
                <button class="delete" @click="deleteTodo(todo.id)">X</button>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            isDone: false,
        };
    },

    methods: {
        deleteTodo(todoId) {
            this.$emit("delete-todo", todoId);
        },

        editTodo(todo) {
            this.$emit("edit-todo", todo);
        },

        markAsDone() {
            this.isDone = !this.isDone;
        },
    },

    emits: ["delete-todo", "edit-todo"],
};
</script>

<style scoped>
li {
    font-size: 1.125rem;
    background-color: #f8f7f4;
    display: flex;
    justify-content: space-between;
}

li.isDone {
    opacity: 0.5;
}

li.isDone p {
    text-decoration: line-through;
}

li p {
    padding: 0.5rem;
}

li div {
    display: flex;
}

li button {
    aspect-ratio: 1;
    cursor: pointer;
    width: 2rem;
}

li button.edit {
    background-color: #fdd835;
}

li button.delete {
    background-color: #e6202a;
}

button:disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
}
</style>
