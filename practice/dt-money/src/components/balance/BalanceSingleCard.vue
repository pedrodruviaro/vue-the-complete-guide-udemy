<template>
    <article
        :class="{
            negative: status === 'negative',
            positive: status === 'positive',
        }"
    >
        <header>
            <h2>{{ title }}</h2>

            <slot name="icon"></slot>
        </header>
        <main>
            <p v-if="value === 0">R$ 0</p>
            <p v-else>{{ value }}</p>
        </main>
    </article>
</template>

<script>
export default {
    props: ["title", "value", "status"],
};
</script>

<style lang="scss" scoped>
article {
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 1.5rem;
    display: grid;
    gap: 1.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2 {
        font-size: 1.35rem;
        font-weight: 400;
    }

    p {
        font-size: 2rem;
        font-weight: 600;
        color: var(--clr-neutral-600);
    }

    &.negative {
        background-color: var(--clr-accent-red);
        color: var(--clr-neutral-100);

        p {
            color: inherit;
        }
    }

    &.positive {
        background-color: var(--clr-accent-green);
    }
}
</style>
