<template>
    <div :class="{ spacing }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        spacing: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    max-width: 70rem;
    widows: 100%;
    padding-inline: 1rem;
    margin-inline: auto;
}

div.spacing {
    padding-block: 4rem;
}
</style>
