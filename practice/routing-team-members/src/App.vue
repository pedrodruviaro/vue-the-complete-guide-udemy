<template>
    <header-nav></header-nav>

    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import HeaderNav from "./components/nav/HeaderNav.vue";

export default {
    components: { HeaderNav },
    data() {
        return {
            teams: [
                { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
                {
                    id: "t2",
                    name: "Backend Engineers",
                    members: ["u1", "u2", "u3"],
                },
                { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
            ],
            users: [
                { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
                { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
                { id: "u3", fullName: "Julie Jones", role: "Engineer" },
                { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
                { id: "u5", fullName: "Marie Smith", role: "Consultant" },
            ],
        };
    },

    provide() {
        return {
            teams: this.teams,
            users: this.users,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

main {
    max-width: 1000px;
    margin-inline: auto;
    padding-inline: 2rem;
}
</style>
