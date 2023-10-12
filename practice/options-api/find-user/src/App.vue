<template>
    <the-header></the-header>

    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
    components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

:root {
    --clr-accent: #3a10e5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    background-color: #fff0e5;
    color: #343434;
}
img {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select,
option {
    font: inherit;
}

.container {
    width: min(100% - 2rem, 60rem);
    margin-inline: auto;
}

.spacing {
    padding-block: 4rem;
}
</style>
