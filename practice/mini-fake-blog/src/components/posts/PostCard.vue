<template>
    <li>
        <header>
            <ph-user-circle :size="32" color="#1a1a1a" />
            <p>{{ post.author.name }}</p>
        </header>
        <main>
            <p>{{ post.title }}</p>
            <base-button link :to="postLink">Read Post</base-button>
        </main>
    </li>
</template>

<script>
import { PhUserCircle } from "@phosphor-icons/vue";

export default {
    props: ["post"],
    components: { PhUserCircle },
    computed: {
        postLink() {
            return `/post/${this.post.id}`;
        },
    },
};
</script>

<style lang="scss" scoped>
li {
    padding: 1.5rem;
    border: 1px solid #ccc;
    display: grid;
    gap: 0.75rem;

    header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        font-size: 1.125rem;
    }

    main {
        display: grid;
        gap: 0.75rem;
    }
}
</style>
