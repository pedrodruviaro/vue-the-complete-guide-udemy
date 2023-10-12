<template>
    <div class="buttons">
        <button
            type="button"
            @click="activate('income')"
            class="income"
            :class="{ active: modelValue === 'income' }"
        >
            <span>Entrada</span>
            <ph-arrow-circle-up :size="32" color="var(--clr-accent-green)" />
        </button>
        <button
            type="button"
            @click="activate('outcome')"
            class="outcome"
            :class="{ active: modelValue === 'outcome' }"
        >
            <span>Saída</span>
            <ph-arrow-circle-down :size="32" color="var(--clr-accent-red)" />
        </button>
    </div>
</template>

<script>
import { PhArrowCircleDown, PhArrowCircleUp } from "@phosphor-icons/vue";

export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
    components: { PhArrowCircleDown, PhArrowCircleUp },
    methods: {
        activate(option) {
            this.$emit("update:modelValue", option);
        },
    },
};
</script>

<style lang="scss" scoped>
.buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
        outline: none;
        border: none;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.125rem;
        background-color: #ffffff;
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
            rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

        &.income.active {
            background-color: var(--clr-accent-green-light);
        }

        &.outcome.active {
            background-color: var(--clr-accent-red-light);
        }
    }
}
</style>
