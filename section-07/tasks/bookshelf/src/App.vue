<template>
    <main class="container">
        <h1>Bookshelf</h1>

        <now-reading :nowReading="nowReading"></now-reading>

        <add-book v-on:add-book="addBook"></add-book>

        <list-books
            v-on:add-to-now-reading="setNowReading"
            :books="books"
        ></list-books>
        <br /><br /><br />
        <provide-test></provide-test>
    </main>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {
                    id: "0",
                    name: "LOTR",
                    date: "01/01/2023",
                },
            ],

            nowReading: "",
        };
    },

    methods: {
        addBook(book) {
            this.books.push(book);
        },

        setNowReading(bookId) {
            const targetBook = this.books.find((book) => book.id === bookId);

            this.nowReading = targetBook.name;
        },
    },

    provide() {
        return {
            books: this.books,
        };
    },
};
</script>

<style>
body {
    background-color: #333;
    color: #ffffff;
    font-family: "Courier New", Courier, monospace;
}

.container {
    max-width: 30rem;
    width: calc(100% - 2rem);
    margin-inline: auto;
    padding-block: 4rem;

    display: grid;
    gap: 3rem;
}

h1 {
    text-align: center;
}

form {
    display: grid;
}
</style>
