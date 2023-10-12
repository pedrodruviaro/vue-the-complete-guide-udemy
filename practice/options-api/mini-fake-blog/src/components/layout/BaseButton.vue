<template>
    <button v-if="!link">
        <slot></slot>
    </button>

    <router-link v-else :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false,
        },

        to: {
            type: String,
            required: false,
            default: "/",
        },
    },
};
</script>

<style lang="scss" scoped>
button,
a {
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    display: block;
    max-width: max-content;
    text-align: center;
    background: #333;
    padding: 0.5rem 1rem;
}
</style>
