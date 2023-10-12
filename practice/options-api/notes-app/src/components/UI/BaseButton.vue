<template>
    <button :class="{ secondary: mode === 'secondary', flat: mode === 'flat' }">
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

<style scoped>
button {
    border-radius: var(--b-radius);
    color: var(--clr-neutral-700);
    background-color: var(--clr-accent-primary);
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    max-width: max-content;
    text-align: center;
}

button:hover,
button:focus {
    filter: brightness(0.9);
    transition: all 200ms ease;
}

button.secondary {
    color: var(--clr-neutral-100);
    background-color: var(--clr-accent-secondary);
}

button.flat {
    background-color: transparent;
    color: var(--clr-neutral-700);
}
</style>
