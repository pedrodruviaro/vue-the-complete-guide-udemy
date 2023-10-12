<template>
    <header>
        <div class="container">
            <h1>
                <ph-currency-circle-dollar
                    :size="32"
                    color="var(--clr-neutral-100)"
                    weight="fill"
                />
                dt money
            </h1>
            <main-button @click="openDialog">Nova transação</main-button>
        </div>
    </header>

    <teleport to="body">
        <main-modal @close="hideDialog" :open="isModalOpen">
            <new-transaction @close="hideDialog" />
        </main-modal>
    </teleport>
</template>

<script>
import { PhCurrencyCircleDollar } from "@phosphor-icons/vue";
import NewTransaction from "../transactions/NewTransaction.vue";

export default {
    data() {
        return {
            isModalOpen: false,
        };
    },

    components: {
        PhCurrencyCircleDollar,
        NewTransaction,
    },

    methods: {
        hideDialog() {
            this.isModalOpen = false;
        },

        openDialog() {
            this.isModalOpen = true;
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    background-color: var(--clr-accent-blue);
    color: var(--clr-neutral-100);

    padding-block: 2rem 10rem;
    display: grid;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}
</style>
