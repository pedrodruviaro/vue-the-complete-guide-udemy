<template>
    <h1>Login</h1>
    <router-link to="/signup">Signup</router-link>

    <form @submit.prevent="login">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Senha" v-model="password" />
        <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "pedro@teste.com",
            password: "123456",
        };
    },

    methods: {
        async login() {
            const user = {
                email: this.email,
                password: this.password,
                returnSecureToken: true,
            };

            try {
                const response = await fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAla-mQbcxUcvmZntY846uIIwsVlWB_trQ",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                    }
                );

                const json = await response.json();

                console.log(response);
                console.log(json);

                if (response.ok) {
                    this.$router.push("/");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
