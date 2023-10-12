<template>
    <header>
        <nav class="container">
            <router-link to="/find-player">Find Player</router-link>
            <router-link to="/my-team">My Team</router-link>
        </nav>
    </header>
</template>

<style>
header {
    background-color: #ffffff;
    padding-block: 2rem;
    border-bottom: 1px solid #333;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

a {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--clr-accent);
}

a:hover {
    text-decoration: underline;
    text-decoration-color: currentColor;
}

a.active {
    text-decoration: underline;
    text-decoration-color: #333;
}
</style>
