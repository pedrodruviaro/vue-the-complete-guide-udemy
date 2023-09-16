<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
    position: fixed;
    top: 20vw;
    left: 30%;
    width: 40%;
    background: white;
    box-shadow: 0 2px 8px rgba(0 0 0 / 0.26);
    padding: 1rem;
    margin: 0;
    border-radius: 10px;
}
</style>
