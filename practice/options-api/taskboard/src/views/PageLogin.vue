<template>
    <div>
        <base-modal
            :show="!!error"
            title="Authentication errror"
            @close="closeModal"
        >
            <p>{{ error }}</p>
        </base-modal>

        <base-modal :show="loading" title="Authenticating..." fixed>
            <p><base-loader /></p>
        </base-modal>

        <section>
            <base-container spacing>
                <transition name="forms" mode="out-in">
                    <div class="sigup" v-if="authMode === 'signup'">
                        <signup-form @submitForm="authenticate" />
                        <p>
                            Já é usuário? Faça o
                            <button @click="setAuthMode('login')">login</button
                            >.
                        </p>
                    </div>

                    <div class="login" v-else>
                        <login-form @submitForm="authenticate" />
                        <p>
                            Não é usuário? Faça seu
                            <button @click="setAuthMode('signup')">
                                cadastro</button
                            >.
                        </p>
                    </div>
                </transition>
            </base-container>
        </section>

        <login-contents />
    </div>
</template>

<script>
import BaseModal from "../components/layout/BaseModal.vue";
import BaseLoader from "../components/layout/BaseLoader.vue";
import LoginContents from "../components/login/LoginContents.vue";
import SignupForm from "../components/login/SignupForm.vue";
import LoginForm from "../components/login/LoginForm.vue";

export default {
    components: { BaseModal, BaseLoader, LoginContents, SignupForm, LoginForm },

    data() {
        return {
            authMode: "login",
            loading: false,
            error: null,
        };
    },

    created() {
        const rediretcPath = this.$route.query.redirect;

        if (rediretcPath) {
            console.log(rediretcPath);
            this.$router.replace(rediretcPath);
        }
    },

    methods: {
        setAuthMode(mode) {
            this.authMode = mode;
        },

        async authenticate(payload) {
            try {
                this.error = null;
                this.loading = true;

                if (payload.mode === "login") {
                    await this.$store.dispatch("login", {
                        email: payload.email,
                        password: payload.password,
                    });
                } else {
                    await this.$store.dispatch("signup", {
                        email: payload.email,
                        password: payload.password,
                        name: payload.name,
                    });
                }

                const rediretcPath = this.$route.query.redirect;

                if (rediretcPath) {
                    console.log(rediretcPath);
                    this.$router.replace(rediretcPath);
                    return;
                }

                this.$router.replace("/dashboard");
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        closeModal() {
            this.error = null;
        },
    },
};
</script>

<style lang="scss" scoped>
p {
    margin-top: 2rem;
    font-size: 1.125rem;
    text-align: center;
    font-weight: 600;

    button {
        display: inline;
        color: inherit;
        text-decoration: underline;
        font-weight: 700;
        text-decoration-color: var(--clr-accent-secondary);
        text-decoration-thickness: 2px;
        text-underline-offset: 2px;
    }
}

.forms-enter-from,
.forms-leave-to {
    opacity: 0;
}

.forms-enter-active {
    transition: opacity 200ms ease-out;
}

.forms-leave-active {
    transition: opacity 200ms ease-in;
}

.forms-enter-to,
.forms-leave-from {
    opacity: 1;
}
</style>
