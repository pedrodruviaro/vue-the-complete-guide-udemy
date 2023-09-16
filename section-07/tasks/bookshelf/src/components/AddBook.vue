<template>
    <form v-on:submit.prevent="addBook">
        <input type="text" required placeholder="Book" v-model="name" />
        <input type="date" required v-model="date" />
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            date: "",
        };
    },
    emits: ["add-book"],

    methods: {
        addBook(e) {
            const book = {
                id: new Date().toISOString(),
                name: this.name,
                date: this.date,
            };

            e.target.reset();

            this.$emit("add-book", book);
        },
    },
};
</script>
