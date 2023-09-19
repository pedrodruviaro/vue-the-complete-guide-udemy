<template>
    <MainContent />
</template>

<script>
import MainContent from "./components/notes/MainContent.vue";

export default {
    components: { MainContent },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap");

:root {
    --spacing: 4.75rem;

    --b-radius: 0.25rem;

    --clr-neutral-100: #f8f7f4;
    --clr-neutral-200: #eeeae3;
    --clr-neutral-700: #343330;
    --clr-accent-primary: #c4e456;
    --clr-accent-secondary: #5c4cc4;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Manrope", sans-serif;
    background-color: var(--clr-neutral-200);
    color: var(--clr-neutral-700);
}

button,
textarea,
input {
    font: inherit;
}

textarea {
    resize: vertical;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: min(100% - 2rem, 70rem);
    margin-inline: auto;
}

.spacing {
    padding-block: var(--spacing);
}
</style>
