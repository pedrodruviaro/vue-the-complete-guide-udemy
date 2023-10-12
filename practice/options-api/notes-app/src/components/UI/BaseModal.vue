<template>
    <div class="overlay">
        <article>
            <div>
                <slot> </slot>
            </div>
            <div class="buttons">
                <base-button @click="close">
                    <span>Close</span>
                    <img src="../../assets/icons/close.svg" alt="" />
                </base-button>
            </div>
        </article>
    </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
    components: { BaseButton },

    methods: {
        close() {
            this.$emit("close");
        },
    },

    emits: ["close"],
};
</script>

<style scoped>
.overlay {
    position: fixed;
    background-color: rgba(0 0 0 / 0.4);
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
}

article {
    border-radius: var(--b-radius);
    background-color: var(--clr-neutral-100);
    padding: 1rem;
    display: grid;
    width: 100%;
    max-width: 30rem;
    gap: 2rem;
}

.buttons {
    align-self: end;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
}
</style>
