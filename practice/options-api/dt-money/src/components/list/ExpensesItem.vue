<template>
    <li>
        <h3>{{ transaction.title }}</h3>
        <p class="value" :class="{ outcome: transaction.type === 'outcome' }">
            {{ transformedValue }}
        </p>
        <p>{{ transaction.category }}</p>
        <time>{{ transaction.date }}</time>
    </li>
</template>

<script>
export default {
    props: ["transaction"],

    computed: {
        transformedValue() {
            const rawValue = this.transaction.value;

            const formatedValue = rawValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

            return formatedValue;
        },
    },
};
</script>

<style lang="scss" scoped>
li {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-500);
    padding: 1rem 1.5rem;
    font-size: 1.125rem;

    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr);

    h3,
    p,
    time {
        font: inherit;
    }

    h3 {
        font-weight: 600;
        color: var(--clr-neutral-600);
    }

    .value {
        color: var(--clr-accent-green);

        &.outcome {
            color: var(--clr-accent-red);
        }
    }
}
</style>
