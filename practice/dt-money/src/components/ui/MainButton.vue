<template>
    <button :class="{ secondary: mode === 'secondary' }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    background-color: var(--clr-accent-blue-light);
    outline: none;
    border: none;
    cursor: pointer;
    color: var(--clr-neutral-100);
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 0.7rem;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
    transition: box-shadow 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:focus {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
}

button.secondary {
    background-color: var(--clr-accent-green);
    color: var(--clr-neutral-700);
}
</style>
