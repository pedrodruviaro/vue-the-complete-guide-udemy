<template>
    <section class="container spacing">
        <page-title>My team</page-title>

        <h3 v-if="loading">Loading...</h3>

        <ul v-if="!isError">
            <li v-for="player in players" :key="player.id">
                <found-player :player="player"></found-player>
            </li>
        </ul>
    </section>
</template>

<script>
import PageTitle from "../UI/PageTitle.vue";
import FoundPlayer from "../find/FoundPlayer.vue";

export default {
    components: { PageTitle, FoundPlayer },

    data() {
        return {
            loading: false,
            isError: false,
            players: [],
        };
    },

    methods: {
        async loadTeam() {
            try {
                this.loading = true;
                this.isError = false;

                const response = await fetch(
                    "https://vue-http-demo-260cc-default-rtdb.asia-southeast1.firebasedatabase.app/my-team.json"
                );

                if (!response.ok || !response) {
                    throw new Error("Something went wrong... try again later");
                }

                const data = await response.json();

                const entries = Object.entries(data);

                entries.map((entry) => {
                    this.players.push(entry[1]);
                });
            } catch (error) {
                this.isError = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.loadTeam();
    },
};
</script>

<style scoped>
h3 {
    text-align: center;
}

ul {
    list-style: none;
    display: grid;
    gap: 1rem;
}
</style>
