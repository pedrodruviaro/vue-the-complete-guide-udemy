<template>
    <base-container :spacing="true">
        <h1>Recent Posts</h1>
        <post-list :postsList="postsPreviews" />
    </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "../components/posts/PostsList.vue";

export default {
    components: { PostList },
    computed: {
        ...mapGetters("posts", ["postsPreviews"]),
    },
};
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 2rem;
}
</style>
