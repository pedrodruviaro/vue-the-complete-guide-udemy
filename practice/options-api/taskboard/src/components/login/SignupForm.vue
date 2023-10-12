<template>
    <form @submit.prevent="submitForm">
        <input type="text" placeholder="Seu nome" v-model="name" />
        <input type="email" required placeholder="Seu email" v-model="email" />
        <input
            type="password"
            required
            placeholder="Seu senha"
            v-model="password"
        />
        <base-button type="submit">Cadastrar</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },

    methods: {
        submitForm() {
            this.$emit("submitForm", {
                name: this.name,
                email: this.email,
                password: this.password,
                mode: "signup",
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
