<template>
    <main-header />
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("setProducts");
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

:root {
    --clr-neutral-100: #f8f7f4;
    --clr-neutral-700: #232323;
    --clr-accent: #febd69;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-700);
}

img {
    max-width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

input,
button,
textarea {
    font: inherit;
    display: block;
}

ul {
    list-style: none;
}
</style>
