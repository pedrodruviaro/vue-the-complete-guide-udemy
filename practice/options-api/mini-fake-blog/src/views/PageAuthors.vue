<template>
    <router-view></router-view>
    <base-container spacing>
        <h1>All Authors</h1>
        <div class="list">
            <author-card
                v-for="author in authors"
                :key="author.id"
                :author="author"
            />
        </div>
    </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import AuthorCard from "../components/author/AuthorCard.vue";

export default {
    components: { AuthorCard },
    computed: {
        ...mapGetters("authors", ["authors"]),
    },
};
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 2rem;
    text-align: center;
}
.list {
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
