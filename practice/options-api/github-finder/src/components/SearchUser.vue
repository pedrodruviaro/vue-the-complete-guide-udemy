<template>
    <section>
        <div class="container">
            <h2>Search Github Users</h2>
            <p>Enter a username to fetch a users profile info and repos</p>
            <form @submit.prevent="findUser">
                <input
                    type="text"
                    placeholder="Username"
                    v-model="username"
                    required
                    ref="username"
                />
                <BaseButton type="submit" :disabled="loading">Find</BaseButton>
            </form>
            <p class="error" v-if="error">{{ error }}</p>
        </div>
    </section>
</template>

<script>
import BaseButton from "./Layout/BaseButton.vue";

export default {
    components: { BaseButton },

    data() {
        return {
            username: "",
            error: null,
            loading: false,
        };
    },

    methods: {
        async findUser(user = this.username) {
            try {
                this.error = "";
                this.loading = true;

                const response = await fetch(
                    `https://api.github.com/users/${user}`
                );

                if (response.status === 404) {
                    this.error = "User not found!";

                    return;
                }

                if (response.ok) {
                    const user = await response.json();
                    this.$emit("findUser", user);

                    this.username = "";
                    this.$refs.username.focus();
                }
            } catch (error) {
                console.error("Error:", error);

                this.error = "An error occurred. Please try again later.";
            } finally {
                this.loading = false;
            }
        },
    },

    emits: ["findUser"],

    async mounted() {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);

        if (urlParams.has("user")) {
            const userSearch = urlParams.get("user");

            await this.findUser(userSearch);
        }
    },
};
</script>

<style scoped>
section {
    margin-block: 3rem;
}

h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

form {
    margin-top: 2rem;
    display: flex;
}

input {
    padding: 0.5rem;
    border: none;
    outline: none;
}

.error {
    margin-top: 1rem;
}
</style>
