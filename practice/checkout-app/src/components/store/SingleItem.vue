<template>
    <li>
        <div class="image-container">
            <img :src="item.image" :alt="item.name" />
        </div>
        <div class="content">
            <h4>{{ item.name }}</h4>
            <p>$ {{ item.price }}</p>
            <p v-if="item.qtd > 0">Qtd: {{ item.qtd }}</p>
        </div>
        <div class="buttons">
            <button @click="removeItem(item.id)">-</button>
            <button @click="addItem(item.id)">+</button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    methods: {
        addItem(itemId) {
            this.$emit("addItemQtd", itemId);
        },

        removeItem(itemId) {
            this.$emit("removeItem", itemId);
        },
    },

    emits: ["addItemQtd", "removeItem"],
};
</script>

<style scoped>
li {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 7rem 1fr;
    position: relative;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
}

.content {
    display: grid;
    gap: 0.25rem;
}

.image-container {
    width: 7rem;
    aspect-ratio: 1;
}

.image-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.buttons {
    position: absolute;
    right: 0;
    bottom: -1rem;
    display: flex;
    gap: 0.25rem;
}

button {
    width: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: gray;
    color: #ffffff;
    display: grid;
    place-items: center;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
}
</style>
