<template>
    <section>
        <div class="toggle">
            <base-button mode="flat" @click="filterByCheck('all')"
                >Active Notes</base-button
            >
            <base-button mode="flat" @click="filterByCheck('checked')"
                >Done Notes</base-button
            >
        </div>

        <div class="notes-grid">
            <NoteCard
                @removeItem="$emit('removeItem', $event)"
                @checkItem="$emit('checkItem', $event)"
                v-for="note in showedNotes"
                :note="note"
                :key="note.id"
            />
        </div>
    </section>
</template>

<script>
import NoteCard from "./NoteCard.vue";

export default {
    components: { NoteCard },
    inject: ["notes"],

    data() {
        return {
            filter: "",
            showedNotes: this.notes,
        };
    },

    methods: {
        filterByCheck(action) {
            if (action === "checked") {
                this.showedNotes = this.notes.filter(
                    (note) => note.checked === true
                );
            } else {
                this.showedNotes = this.notes;
            }
        },
    },
};
</script>

<style scoped>
.toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-bottom: 2rem;
    justify-items: center;
}

button {
    max-width: unset;
}

.notes-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
