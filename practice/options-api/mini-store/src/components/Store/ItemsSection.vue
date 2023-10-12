<template>
    <section>
        <div class="container">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <p>{{ item.name }}</p>
                    <div>
                        <button @click="handleCart('remove', item)">-</button>
                        <button @click="handleCart('add', item)">+</button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },

    methods: {
        handleCart(act, item) {
            this.$emit("changeCart", { act, item });
        },
    },

    emits: ["changeCart"],
};
</script>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 1rem;
}

ul {
    display: grid;
    gap: 0.5rem;
    list-style: none;
}

li {
    background-color: #ccc;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.5rem;
    color: #111;
    font-weight: 700;
}

li div {
    display: flex;
    gap: 0.5rem;
}

button {
    width: 2rem;
    aspect-ratio: 1;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #604fcd;
    color: #fff;
    font-weight: 700;
}
</style>
