<template>
    <section class="container" v-if="transactions.length !== 0">
        <div>
            <p>Título</p>
            <p>Valor</p>
            <p>Categoria</p>
            <p>Data</p>
        </div>
        <transition-group tag="ul" name="expenses-list">
            <expenses-item
                v-for="transaction in transactions"
                :transaction="transaction"
                :key="transaction.id"
            ></expenses-item>
        </transition-group>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import ExpensesItem from "./ExpensesItem.vue";
export default {
    components: { ExpensesItem },
    computed: {
        ...mapGetters(["transactions"]),
    },
};
</script>

<style lang="scss" scoped>
div {
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr);
    padding: 1rem 1.5rem;
    color: var(--clr-neutral-500);
}

ul {
    display: grid;
    gap: 0.5rem;
    list-style: none;
}

.expenses-list-enter-active {
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.expenses-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.expenses-list-leave-active {
    transition: all 500ms ease-out;
}

.expenses-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.expenses-list-move {
    transition: transform 500ms ease;
}

@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
