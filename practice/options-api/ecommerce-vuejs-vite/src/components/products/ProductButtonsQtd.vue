<template>
    <div class="qtd--buttons">
        <button @click="$emit('removeQtd')">-</button>
        <span v-if="qtd !== 0">{{ qtd }}</span>
        <button @click="$emit('addQtd')">+</button>
    </div>
</template>

<script>
export default {
    props: ["qtd"],
    emits: ["removeQtd", "addQtd"],
};
</script>

<style lang="scss" scoped>
.qtd--buttons {
    display: flex;
    gap: 0.25rem;

    button {
        width: 2rem;
        aspect-ratio: 1;
        outline: none;
        border: none;
        color: var(--clr-neutral-100);
        background-color: var(--clr-neutral-700);
        cursor: pointer;
    }
}
</style>
