<template>
    <span class="loader"></span>
</template>

<style lang="scss" scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--clr-neutral-700);
    border-bottom-color: var(--clr-neutral-500);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
