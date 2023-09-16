<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" :another-prop="'hello'"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return { goals: ["1", "2"] };
    },
};
</script>
