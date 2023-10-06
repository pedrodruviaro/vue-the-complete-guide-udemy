<template>
    <button
        v-if="!link"
        :class="{ secondary: mode === 'secondary' ? 'secondary' : '' }"
    >
        <slot></slot>
    </button>

    <router-link
        v-else
        :to="to"
        :class="{ secondary: mode === 'secondary' ? 'secondary' : '' }"
    >
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
        },
        to: {
            type: String,
            required: false,
            default: "/",
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
button,
a {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: var(--clr-accent-primary);
    color: var(--clr-neutral-700);
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: var(--b-radius);
    justify-content: center;

    &.secondary {
        background-color: var(--clr-accent-secondary);
    }

    &:hover,
    &:focus {
        transition: filter 250ms ease;
        filter: brightness(0.85);
    }
}
</style>
