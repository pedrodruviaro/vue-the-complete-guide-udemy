<template>
    <section class="container">
        <balance-single-card title="Entradas" :value="totalIncome">
            <template #icon>
                <ph-arrow-circle-up
                    :size="38"
                    color="var(--clr-accent-green)"
                />
            </template>
        </balance-single-card>

        <balance-single-card title="Saídas" :value="totalOutcome">
            <template #icon>
                <ph-arrow-circle-down
                    :size="38"
                    color="var(--clr-accent-red)"
                />
            </template>
        </balance-single-card>

        <balance-single-card
            title="Total"
            :value="totalTransactions.value"
            :status="totalTransactions.status"
        >
            <template #icon>
                <ph-currency-dollar :size="38" color="var(--clr-neutral-100)" />
            </template>
        </balance-single-card>
    </section>
</template>

<script>
import BalanceSingleCard from "./BalanceSingleCard.vue";
import {
    PhCurrencyDollar,
    PhArrowCircleDown,
    PhArrowCircleUp,
} from "@phosphor-icons/vue";
import { mapGetters } from "vuex";

export default {
    components: {
        BalanceSingleCard,
        PhCurrencyDollar,
        PhArrowCircleDown,
        PhArrowCircleUp,
    },

    computed: {
        ...mapGetters(["totalIncome", "totalOutcome", "totalTransactions"]),
    },
};
</script>

<style lang="scss" scoped>
section {
    display: grid;
    gap: 2rem;
    padding-block: 4rem;
    margin-top: -8.5rem;

    @media (min-width: 45em) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
