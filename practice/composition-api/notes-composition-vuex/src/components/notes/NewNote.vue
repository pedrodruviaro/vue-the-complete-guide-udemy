<template>
    <form @submit.prevent="addNote">
        <input
            type="text"
            placeholder="Title"
            v-model="title"
            ref="titleInput"
        />
        <textarea rows="5" placeholder="Note" v-model="note"></textarea>
        <select v-model="category">
            <option value="">Category</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
        </select>
        <button type="submit">Create</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const title = ref("");
const note = ref("");
const category = ref("");

const titleInput = ref("");

const store = useStore();

function addNote(event) {
    const { target: form } = event;

    const newNote = {
        id: new Date().toISOString(),
        title: title.value,
        note: note.value,
        category: category.value,
    };

    store.dispatch("addNote", { note: newNote });

    form.reset();
    titleInput.value.focus();
}
</script>
