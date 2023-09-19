<template>
    <main class="spacing container">
        <NewNote @newNote="handleNewNote" @newCategory="handleNewCategory" />
        <NotesDisplay
            @checkItem="handleCheckItem"
            @removeItem="handleRemoveItem"
        />
    </main>
</template>

<script>
import NewNote from "./NewNote.vue";
import NotesDisplay from "./NotesDisplay.vue";

export default {
    components: { NewNote, NotesDisplay },

    data() {
        return {
            categories: [
                {
                    id: "react",
                    title: "React",
                },
                {
                    id: "vue",
                    title: "Vue JS",
                },
                {
                    id: "nextjs",
                    title: "Next JS",
                },
            ],
            notes: [
                {
                    id: "first-note",
                    content: "First note",
                    categories: ["vue", "react"],
                },

                {
                    id: "second-note",
                    content: "Second note",
                    categories: ["react", "nextjs"],
                },
            ],
        };
    },

    provide() {
        return {
            categories: this.categories,
            notes: this.notes,
        };
    },

    methods: {
        handleNewNote(newNote) {
            this.notes.unshift(newNote);
        },

        handleNewCategory(newCategory) {
            this.categories.push(newCategory);
        },

        handleRemoveItem(item) {
            const findItem = this.notes.findIndex((x) => x.id === item.id);
            this.notes.splice(findItem, 1);
        },

        handleCheckItem(item) {
            const foundItem = this.notes.find((note) => note.id === item.id);

            if (foundItem) {
                foundItem.checked = true;
            }
        },
    },
};
</script>

<style scoped>
main {
    display: grid;
    gap: 3rem;
}

@media (min-width: 72em) {
    main {
        grid-template-columns: 1fr 2.5fr;
        align-items: start;
        gap: 4rem;
    }
}
</style>
