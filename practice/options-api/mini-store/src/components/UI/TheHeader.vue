<template>
    <header>
        <div class="container">
            <h1>
                MiniStore
                <img src="../../../public/logo.svg" aria-hidden="true" alt="" />
            </h1>

            <button @click="showCart">
                <img src="../../../public/cart.svg" alt="" />
                <span>{{ cart.length }}</span>
            </button>
        </div>

        <teleport to="body">
            <dialog open>
                <div class="container">
                    <h3>My Cart</h3>

                    <ItemsSection
                        title="Items in cart"
                        :items="cart"
                        @changeCart="handleCart"
                    />
                </div>
            </dialog>
        </teleport>
    </header>
</template>

<script>
import ItemsSection from "../Store/ItemsSection.vue";

export default {
    props: ["cart", "handleCart"],
    methods: {
        showCart() {},
    },
    components: { ItemsSection },
};
</script>

<style scoped>
header {
    background-color: #111;
    padding-block: 1.25rem;
}

div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
}

button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 0.25rem;
    color: #fff;
}

h1 {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0.5rem;
}
</style>
