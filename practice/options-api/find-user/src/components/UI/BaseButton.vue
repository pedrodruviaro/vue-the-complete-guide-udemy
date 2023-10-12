<template>
    <button :class="{ secondary: mode === 'secondary' }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        mode: {
            required: false,
            type: String,
        },
    },
};
</script>

<style scoped>
button {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: var(--clr-accent);
    color: #ffffff;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    font-weight: 600;
}

button.secondary {
    background-color: #ffd300;
    color: #333;
}

button:disabled {
    filter: grayscale(50%);
    opacity: 0.5;
    cursor: not-allowed;
}

button:hover,
button:focus {
    filter: brightness(1.1);
    transition: all 0.2s ease;
}
</style>
