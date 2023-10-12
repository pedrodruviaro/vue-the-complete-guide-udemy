<template>
    <form @submit.prevent="submitForm">
        <input
            type="search"
            placeholder="Search..."
            v-model.trim="search"
            required
        />
        <button type="submit">Search</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            search: "",
        };
    },

    methods: {
        submitForm() {
            const search = this.search.trim();
            const url = `/search?q=${search}`;

            this.$router.push(url);
        },
    },
};
</script>
