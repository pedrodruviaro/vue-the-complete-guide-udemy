<template>
    <div>
        <h3>Recent books:</h3>
        <ul>
            <li
                v-for="book in books"
                :key="book.id"
                @dblclick="addToNowReading(book)"
            >
                <span>{{ book.name }}</span>
                <span> - </span>
                <span>{{ book.date }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        books: {
            type: Array,
            required: true,
        },
    },

    emits: ["add-to-now-reading"],

    methods: {
        addToNowReading(book) {
            this.$emit("add-to-now-reading", book.id);
        },
    },
};
</script>
