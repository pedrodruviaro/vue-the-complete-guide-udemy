<template>
    <section v-if="singlePost && authorInfos">
        <base-container :spacing="true">
            <h1>{{ singlePost.title }}</h1>
            <p>{{ singlePost.body }}</p>
        </base-container>
        <base-container :spacing="true">
            <footer>
                <author-card :author="authorInfos" />
            </footer>
        </base-container>
    </section>

    <section v-else>
        <base-container spacing>
            <h2>Post not found...</h2>
        </base-container>
    </section>
</template>

<script>
import AuthorCard from "../components/author/AuthorCard.vue";

export default {
    props: ["id"],
    components: { AuthorCard },
    computed: {
        numberId() {
            return Number(this.id);
        },

        singlePost() {
            return this.$store.getters["posts/postById"](this.numberId);
        },

        authorInfos() {
            return this.$store.getters["authors/authorById"](
                this.singlePost.userId
            );
        },
    },
};
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 1rem;
}
</style>
