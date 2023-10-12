<template>
    <div class="container">
        <h2 v-if="note">Note: {{ note.title }}</h2>

        <router-link to="/">Notes</router-link>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const { id: noteId } = route.params;

const note = computed(() => store.getters.singleNote(noteId));

if (!note.value) {
    router.push("/");
}
</script>
