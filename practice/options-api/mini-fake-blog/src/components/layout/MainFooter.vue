<template>
    <footer>
        <base-container>
            <p>&copy; Copyright - {{ getYear }}</p>
        </base-container>
    </footer>
</template>

<script>
export default {
    computed: {
        getYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style lang="scss" scoped>
footer {
    background-color: #333333;
    color: #fff;
    text-align: center;
    padding-block: 1.25rem;
    font-weight: 700;
    align-self: end;
}
</style>
