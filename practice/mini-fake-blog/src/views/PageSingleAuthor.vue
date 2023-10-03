<template>
    <base-container spacing v-if="authorsInfos && authorPosts">
        <h1>Posts by - {{ authorsInfos.name }}</h1>
        <div class="list">
            <post-card
                v-for="post in postsFromAuthor"
                :key="post.id"
                :post="post"
            />
        </div>
    </base-container>

    <base-container :spacing="true" v-else>
        <h1>Author Not Found...</h1>
    </base-container>
</template>

<script>
import BaseContainer from "../components/layout/BaseContainer.vue";
import PostCard from "../components/posts/PostCard.vue";

export default {
    components: {
        PostCard,
        BaseContainer,
    },
    props: ["id"],
    computed: {
        numberId() {
            return Number(this.id);
        },

        authorsInfos() {
            return this.$store.getters["authors/authorById"](this.numberId);
        },

        authorPosts() {
            return this.$store.getters["posts/postsFromAuthor"](this.numberId);
        },

        postsFromAuthor() {
            const posts = [];

            this.authorPosts.forEach((post) => {
                const infos = {
                    id: post.id, //do post
                    title: post.title, // do post
                    author: {
                        name: this.authorsInfos.name,
                    },
                };

                posts.push(infos);
            });

            return posts;
        },
    },
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
.list {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
}
</style>
