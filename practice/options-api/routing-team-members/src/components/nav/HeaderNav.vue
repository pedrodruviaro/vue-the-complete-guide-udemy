<template>
    <header>
        <router-link to="/teams">Teams</router-link>
        <router-link to="/users">Users</router-link>
    </header>
</template>

<style scoped>
header {
    background: #2c3e50;
    display: flex;
    justify-content: center;
    color: #fff;
    gap: 2rem;
    margin-bottom: 3rem;
    padding-block: 2rem;
}

a {
    color: inherit;
    text-decoration: none;
    font-size: 1.25rem;
}

a.active {
    text-decoration: underline;
}
</style>
