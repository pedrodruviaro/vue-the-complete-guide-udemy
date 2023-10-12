<template>
    <router-view></router-view>

    <ul>
        <team-card
            v-for="team in teams"
            :team="team"
            :key="team.id"
        ></team-card>
    </ul>
</template>

<script>
import TeamCard from "./TeamCard.vue";

export default {
    components: { TeamCard },
    inject: ["teams"],
};
</script>

<style scoped>
ul {
    display: grid;
    gap: 1rem;
    list-style: none;
}
</style>
