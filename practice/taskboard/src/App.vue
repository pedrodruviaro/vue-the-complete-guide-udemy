<template>
    <main-header />
    <main>
        <router-view></router-view>
    </main>
    <main-footer />
</template>

<script>
import MainHeader from "./components/ui/MainHeader.vue";
import MainFooter from "./components/ui/MainFooter.vue";

export default {
    components: { MainHeader, MainFooter },

    computed: {
        didAutoLogout() {
            return this.$store.getters.didAutoLogout;
        },
    },

    created() {
        this.$store.dispatch("tryLogin");
    },

    watch: {
        didAutoLogout(currentValue, oldValue) {
            if (currentValue && currentValue !== oldValue) {
                this.$router.replace("/coaches");
            }
        },
    },
};
</script>
