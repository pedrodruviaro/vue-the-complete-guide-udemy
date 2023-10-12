<template>
    <li>
        <h3>{{ team.name }}</h3>
        <p>
            Members: <strong>{{ team.members.length }}</strong>
        </p>
        <router-link :to="getFullLinkPath">View Members</router-link>
    </li>
</template>

<script>
export default {
    props: ["team"],

    computed: {
        getFullLinkPath() {
            const pathName = "teams";

            return `/${pathName}/${this.team.id}`;
        },
    },
};
</script>

<style scoped>
li {
    padding: 1rem;
    background-color: #ececec;
    border: 1px solid #ccc;
    display: grid;
    gap: 1rem;
}

a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    background: firebrick;
    color: white;
    max-width: max-content;
    padding: 0.5rem 1rem;
}
</style>
