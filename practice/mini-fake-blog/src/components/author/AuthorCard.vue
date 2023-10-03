<template>
    <div>
        <h2>
            <router-link :to="authorPageLink">{{ author.name }}</router-link>
        </h2>
        <p>{{ author.email }}</p>
        <p>{{ author.website }}</p>
    </div>
</template>

<script>
export default {
    props: ["author"],
    computed: {
        authorPageLink() {
            return `/authors/${this.author.id}`;
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    display: grid;
}

a {
    text-decoration: underline;
}
</style>
