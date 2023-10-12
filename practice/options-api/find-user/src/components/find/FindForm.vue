<template>
    <form @submit.prevent="findUser">
        <select required v-model="preferedRole">
            <option value="">Select</option>
            <option value="Carry">Carry</option>
            <option value="Mid">Mid</option>
            <option value="Offlaner">Offlaner</option>
            <option value="Soft Support">Soft Support</option>
            <option value="Hard Support">Hard Support</option>
        </select>
        <base-button
            :disabled="error || isLoading"
            type="submit"
            :mode="setButtonClass"
        >
            {{ showButtonText }}
        </base-button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
</template>

<script>
export default {
    props: ["currentPlayer"],

    data() {
        return {
            preferedRole: "",
            isLoading: null,
            error: null,
        };
    },

    computed: {
        showButtonText() {
            return !this.currentPlayer ? "Search" : "Search Other";
        },
        setButtonClass() {
            return !this.currentPlayer ? null : "secondary";
        },
    },

    methods: {
        async findUser() {
            try {
                this.isLoading = true;
                this.error = null;

                const response = await fetch("https://randomuser.me/api/");

                if (response.ok) {
                    const { results } = await response.json();

                    const player = {
                        id: results[0].login.uuid,
                        name: results[0].name.first,
                        lastName: results[0].name.last,
                        nationality: results[0].nat,
                        location: {
                            city: results[0].location.city,
                            country: results[0].location.country,
                        },
                        username: results[0].login.username,
                        playerSince: results[0].registered.date,
                        photoUrl: results[0].picture.large,
                        role: this.preferedRole,
                    };

                    this.$emit("findPlayer", player);
                } else {
                    throw new Error("Something went wrong, try again later");
                }
            } catch (err) {
                this.error = err.message;
            } finally {
                this.isLoading = false;
            }
        },
    },

    emits: ["findPlayer"],
};
</script>

<style scoped>
form {
    display: grid;
    gap: 0.5rem;
}

select {
    padding: 0.7rem 0.5rem;
    outline: none;
    border: 1px solid var(--clr-accent);
}

.error {
    margin-top: 1rem;
    font-weight: 600;
}
</style>
