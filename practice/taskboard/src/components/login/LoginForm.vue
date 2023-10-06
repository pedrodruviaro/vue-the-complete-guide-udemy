<template>
    <form @submit.prevent="submitForm">
        <input type="email" required placeholder="Email" v-model="email" />
        <input
            type="password"
            required
            placeholder="Senha"
            v-model="password"
        />
        <base-button type="submit">Entrar</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        submitForm() {
            this.$emit("submitForm", {
                email: this.email,
                password: this.password,
                mode: "login",
            });
        },
    },

    emits: ["submitForm"],
};
</script>

<style lang="scss" scoped>
form {
    display: grid;
    gap: 1rem;

    input {
        border-radius: var(--b-radius);
        padding: 0.5rem 1rem;
        outline: none;
        border: 1px solid var(--clr-neutral-500);
    }
}
</style>
