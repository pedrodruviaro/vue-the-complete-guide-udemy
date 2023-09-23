<template>
    <button v-if="mode === 'button'">
        <slot></slot>
    </button>

    <a v-else>
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: "button",
        },
    },
};
</script>

<style scoped>
button,
a {
    background-color: #347d39;
    text-align: center;
    outline: none;
    cursor: pointer;
    border: none;
    color: #fff;
    font-size: 1rem;
    padding: 0.3rem 0.65rem;
    display: grid;
    place-items: center;
    text-decoration: none;
}

button:disabled {
    opacity: 0.7;
    filter: grayscale(100%);
    cursor: not-allowed;
}
</style>
