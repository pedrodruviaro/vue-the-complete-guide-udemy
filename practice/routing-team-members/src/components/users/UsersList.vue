<template>
    <h2>Users</h2>
    <ul>
        <li v-for="user in localUsers" :key="user.id">
            <h3>{{ user.fullName }}</h3>
            <h4
                :class="{
                    consultant: user.role.toLowerCase() === 'consultant',
                }"
            >
                {{ user.role }}
            </h4>
        </li>
    </ul>

    <p v-if="isErrorInFiltering">
        {{ isErrorInFiltering }}
    </p>
</template>

<script>
export default {
    inject: ["users"],

    data() {
        return {
            localUsers: this.users,
            isErrorInFiltering: null,
        };
    },

    methods: {
        filterByRole(role) {
            const results = this.users.filter(
                (user) => user.role.toLowerCase() === role.toLowerCase()
            );

            if (results.length === 0) {
                this.isErrorInFiltering =
                    "Filter returned nothing... try other roles";
            } else {
                this.isErrorInFiltering = "";
            }

            this.localUsers = results;
        },
    },

    created() {
        const query = this.$route.query;
        const { role } = query;

        if (role) {
            this.filterByRole(role);
        }
    },
};
</script>

<style scoped>
h2 {
    margin-bottom: 2rem;
}

ul {
    list-style: none;
    display: grid;
    gap: 1.5rem;
}

li {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: #ccc;
    padding: 0.5rem 1rem;
    align-items: center;
}

h4 {
    background-color: chocolate;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 100vmax;
}

h4.consultant {
    background-color: blueviolet;
}
</style>
