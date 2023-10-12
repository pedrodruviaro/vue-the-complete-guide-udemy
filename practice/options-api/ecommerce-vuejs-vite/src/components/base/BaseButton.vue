<template>
    <button v-if="!link">
        <slot></slot>
    </button>

    <router-link :to="to" v-else>
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        link: { type: Boolean, required: false },

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
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    background-color: var(--clr-accent);
    color: var(--clr-neutral-700);
    font-weight: 700;
}
</style>
