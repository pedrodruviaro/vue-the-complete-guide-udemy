<template>
    <article>
        <h2>Members of {{ id }}</h2>
        <ul>
            <li v-for="member in members" :key="member.id">
                <h4>{{ member.fullName }}</h4>
                <h5>{{ member.role }}</h5>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    props: ["id"],
    inject: ["teams", "users"],
    data() {
        return {
            members: [],
        };
    },

    methods: {
        loadTeamMembers(id) {
            const currentTeam = this.teams.find((team) => team.id === id);
            const currentTeamMembers = currentTeam.members;

            let filteredMembers = [];

            for (let i = 0; i < this.users.length; i++) {
                const currentUser = this.users[i];

                if (
                    currentTeamMembers.find((user) => user === currentUser.id)
                ) {
                    filteredMembers.push(currentUser);
                }
            }

            this.members = filteredMembers;
        },
    },

    created() {
        this.loadTeamMembers(this.id);
    },

    watch: {
        id(updatedId) {
            this.loadTeamMembers(updatedId);
        },
    },
};
</script>

<style scoped>
article {
    padding: 1rem;
    background-color: #ddd;
    padding: 1rem;
    margin-bottom: 2rem;
}

h2 {
    margin-bottom: 2rem;
}

ul {
    list-style: none;
    display: grid;
    gap: 1.5rem;
}

li {
    display: grid;
    gap: 0.5rem;
}
</style>
