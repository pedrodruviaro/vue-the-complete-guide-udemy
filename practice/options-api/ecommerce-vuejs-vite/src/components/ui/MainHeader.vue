<template>
    <header>
        <base-container>
            <h1>
                <router-link to="/">E-commerce</router-link>
            </h1>
            <base-button :link="true" to="/checkout"
                >Cart ({{ cartQtd }})</base-button
            >
        </base-container>
    </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["cartQtd"]),
    },
};
</script>

<style lang="scss" scoped>
header {
    background-color: var(--clr-neutral-700);
    color: var(--clr-neutral-100);
    display: grid;
    padding-block: 1.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
</style>
