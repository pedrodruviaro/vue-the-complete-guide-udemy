<template>
    <div class="products">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.products {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: 45em) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 70em) {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
