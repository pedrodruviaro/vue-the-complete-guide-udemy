<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default { props: { title: { type: String, required: true } } };
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2.25rem;
}
</style>
