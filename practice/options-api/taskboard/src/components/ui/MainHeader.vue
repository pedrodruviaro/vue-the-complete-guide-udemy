<template>
    <header>
        <base-container>
            <router-link to="/">
                <img src="/logo.svg" alt="taskboard" />
            </router-link>
            <div v-if="isAuthenticated">
                <span>Hello, {{ username }}</span>
                <base-button link to="/dashboard">Dashboard</base-button>
                <base-button mode="secondary" @click="logout"
                    >Logout</base-button
                >
            </div>
        </base-container>
    </header>
</template>

<script>
export default {
    computed: {
        username() {
            return this.$store.getters.username;
        },

        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
    },

    methods: {
        logout() {
            this.$store.dispatch("logout");
            this.$router.replace("/login");
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    padding-block: 1.5rem;
    background-color: var(--clr-neutral-700);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;

        div {
            display: flex;
            gap: 1rem;
        }
    }
}
</style>
