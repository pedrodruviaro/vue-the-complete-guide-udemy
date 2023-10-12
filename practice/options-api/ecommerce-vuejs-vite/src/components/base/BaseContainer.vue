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
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    width: 100%;
    max-width: 70rem;
    padding-inline: 1rem;
    margin-inline: auto;

    &.spacing {
        padding-block: 4.25rem;
    }
}
</style>
