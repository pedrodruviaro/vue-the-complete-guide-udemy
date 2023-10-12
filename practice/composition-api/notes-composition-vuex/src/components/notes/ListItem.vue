<template>
    <li>
        <h4>{{ note.title }}</h4>
        <p>{{ note.note }}</p>
        <p>Category: {{ note.category }}</p>
        <router-link :to="noteLink">View details</router-link>
    </li>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
    note: Object,
});

const noteLink = computed(() => {
    return `/notes/${props.note?.id}`;
});
</script>

<style scoped>
li {
    list-style: none;
    border: 1px solid #ddd;
    display: grid;
    padding: 1rem;
    margin-top: 1rem;
    gap: 1rem;
}
</style>
