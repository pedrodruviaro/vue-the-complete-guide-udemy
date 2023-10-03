<template>
    <main-header />
    <main>
        <h3 v-if="error">{{ error }}</h3>
        <h3 v-if="loading">Loading...</h3>

        <router-view v-else></router-view>
    </main>
    <main-footer />
</template>

<script>
import MainFooter from "./components/layout/MainFooter.vue";
import MainHeader from "./components/layout/MainHeader.vue";
import apiService from "./services/apiService";

export default {
    components: { MainHeader, MainFooter },

    data() {
        return {
            error: null,
            loading: true,
        };
    },

    async created() {
        try {
            const authors = await apiService.getAuthors();
            const posts = await apiService.getPosts();

            if (authors && posts) {
                this.$store.dispatch("authors/setAuthors", authors);
                this.$store.dispatch("posts/setPosts", posts);
            }
        } catch (error) {
            this.error =
                error.message || "Something went wrong... try again later";
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style lang="scss">
#app {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100vh;
}
</style>
