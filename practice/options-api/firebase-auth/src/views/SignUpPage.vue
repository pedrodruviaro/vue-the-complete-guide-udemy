<template>
    <h1>Signup Page</h1>
    <router-link to="/login">Login</router-link>

    <form @submit.prevent="signup">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Senha" v-model="password" />
        <button type="submit">Cadastrar</button>
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
        async signup() {
            const newUser = {
                email: this.email,
                password: this.password,
                returnSecureToken: true,
            };

            try {
                const response = await fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAla-mQbcxUcvmZntY846uIIwsVlWB_trQ",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newUser),
                    }
                );

                const json = await response.json();

                console.log(response);
                console.log(json);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
