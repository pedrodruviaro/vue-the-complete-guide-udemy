<template>
    <li v-if="item">
        <div class="content">
            <h4>{{ item.name }}</h4>
            <p>$ {{ item.price }}</p>
            <!-- <p v-if="item.qtd > 0">Qtd: {{ item.qtd }}</p> -->
            <p>Qtd: {{ item.qtd }}</p>
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
            required: false,
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

<style scoped></style>
