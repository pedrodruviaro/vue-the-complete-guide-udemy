<template>
    <ul>
        <ListItem v-for="note in notes.notes" :key="note.id" :note="note" />
    </ul>
</template>

<script setup>
import ListItem from "./ListItem.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const notes = computed(() => store.getters.notes);
</script>
