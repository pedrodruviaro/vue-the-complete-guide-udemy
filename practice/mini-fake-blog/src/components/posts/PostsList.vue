<template>
    <ul>
        <post-card v-for="post in postsList" :key="post.id" :post="post" />
    </ul>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
    props: ["postsList"],
    components: { PostCard },
};
</script>

<style lang="scss" scoped>
ul {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>
