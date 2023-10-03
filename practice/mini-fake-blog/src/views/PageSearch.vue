<template>
    <base-container spacing>
        <h1>Search Posts Result</h1>

        <div class="list" v-if="getPostsSearch.length > 0">
            <post-card
                v-for="post in getPostsSearch"
                :key="post.id"
                :post="post"
            />
        </div>

        <p v-else>Nothing found on "{{ query }}"</p>
    </base-container>
</template>

<script>
import PostCard from "../components/posts/PostCard.vue";

export default {
    components: { PostCard },
    computed: {
        getPostsSearch() {
            const query = this.$route.query.q;

            return this.$store.getters["posts/postsQuery"](query);
        },

        query() {
            return this.$route.query.q;
        },
    },
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}

p {
    text-align: center;
}

.list {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
}
</style>
