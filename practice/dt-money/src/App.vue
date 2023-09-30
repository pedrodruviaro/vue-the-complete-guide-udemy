<template>
    <main-header />
    <balance-cards />
    <expenses-list />
</template>

<script>
import BalanceCards from "./components/balance/BalanceCards.vue";
import ExpensesList from "./components/list/ExpensesList.vue";

export default {
    components: { BalanceCards, ExpensesList },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

:root {
    --clr-neutral-100: #ffffff;
    --clr-neutral-200: #ececec;
    --clr-neutral-500: #969cb3;
    --clr-neutral-600: #363f5f;
    --clr-neutral-700: #333333;

    --clr-accent-red: #e52e4d;
    --clr-accent-red-light: #f8dde1;
    --clr-accent-green: #33cc95;
    --clr-accent-green-light: #d6f1e8;
    --clr-accent-blue: #5429cc;
    --clr-accent-blue-light: #6933ff;
}

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

html {
    @media (max-width: 67.5rem) {
        font-size: 93.75%;
    }

    @media (max-width: 45rem) {
        font-size: 87.5%;
    }
}

body {
    background-color: var(--clr-neutral-200);
    color: var(--clr-neutral-700);
    -webkit-font-smoothing: antialiased;
    font-family: "Poppins", sans-serif;
}

input,
textarea,
button {
    font: inherit;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: 100%;
    max-width: 75rem;
    margin-inline: auto;
    padding-inline: 1rem;
}
</style>
