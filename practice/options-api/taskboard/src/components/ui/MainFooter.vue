<template>
    <footer>
        <base-container>
            <p>&copy; Copyright - {{ year }}</p>
        </base-container>
    </footer>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style lang="scss" scoped>
footer {
    padding-block: 1rem;
    background-color: var(--clr-neutral-700);
    text-align: center;
}
</style>
