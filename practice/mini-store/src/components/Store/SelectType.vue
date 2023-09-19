<template>
    <section>
        <div class="container">
            <button
                @click="changeCurrentStoreTab('food')"
                :class="{ active: currentStoreTab === 'food' }"
            >
                Food
            </button>
            <button
                @click="changeCurrentStoreTab('drink')"
                :class="{ active: currentStoreTab === 'drink' }"
            >
                Drink
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: ["currentStoreTab"],
    methods: {
        changeCurrentStoreTab(newTab) {
            this.$emit("changeCurrentStoreTab", newTab);
        },
    },

    emits: ["changeCurrentStoreTab"],
};
</script>

<style scoped>
.container {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 2rem 3rem;
}

button {
    flex: 1;
    padding-block: 1rem;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    color: inherit;
    border: none;
    font-weight: 700;
}

button:nth-child(1) {
    border-right: 1px solid #ccc;
}

button.active {
    background-color: #cccccc0e;
}
</style>
