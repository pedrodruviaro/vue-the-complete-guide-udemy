<template>
    <header>
        <base-container>
            <h1>Blog</h1>
            <nav>
                <router-link to="/">Posts</router-link>
                <router-link to="/authors">Authors</router-link>
            </nav>
            <posts-search />
        </base-container>
    </header>
</template>

<script>
import PostsSearch from "../posts/PostsSearch.vue";

export default {
    components: { PostsSearch },
};
</script>

<style lang="scss" scoped>
header {
    background-color: #333333;
    color: #fff;
    padding-block: 1.25rem;

    div {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;

        nav {
            display: flex;
            gap: 1rem;
        }
    }
}
</style>
