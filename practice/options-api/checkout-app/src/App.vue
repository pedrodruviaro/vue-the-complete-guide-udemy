<template>
    <section class="container app__container">
        <base-card>
            <template #title>
                <h3>Items</h3>
            </template>
            <template #default>
                <base-list>
                    <SingleItem
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                        @addItemQtd="addItemQtd"
                        @removeItem="removeItem"
                    />
                </base-list>
            </template>
        </base-card>

        <base-card>
            <template #title>
                <h3>Checkout</h3>
            </template>
            <template #default>
                <base-list>
                    <CartItem
                        v-for="item in cart"
                        :item="item"
                        :key="item.id"
                        @addItemQtd="addItemQtd"
                        @removeItem="removeItem"
                    ></CartItem>

                    <h2 v-if="totalValue > 0">
                        Total purchase: $ {{ roundedValue }}
                    </h2>
                </base-list>
            </template>
        </base-card>
    </section>
</template>

<script>
import SingleItem from "./components/store/SingleItem.vue";
import CartItem from "./components/store/CartItem.vue";

export default {
    components: { SingleItem, CartItem },

    data() {
        return {
            items: [
                {
                    id: "pizza",
                    name: "Pizza",
                    price: "29.90",
                    image: "/images/pizza.jpg",
                },

                {
                    id: "hamburger",
                    name: "Hamburger",
                    price: "19.90",
                    image: "/images/hamb.jpg",
                },

                {
                    id: "fries",
                    name: "Fries",
                    price: "9.90",
                    image: "/images/fries.jpg",
                },

                {
                    id: "soda",
                    name: "Soda",
                    price: "5.89",
                    image: "/images/soda.jpg",
                },
            ],

            cart: [],

            totalValue: 0,
        };
    },

    methods: {
        addItemQtd(itemId) {
            const foundItem = this.items.find((item) => item.id === itemId);

            if (foundItem) {
                // quantidade
                if (!foundItem.qtd) {
                    foundItem.qtd = 0;
                }

                foundItem.qtd += 1;

                // cart
                const isInCart = this.cart.find((item) => item.id === itemId);

                if (!isInCart) {
                    this.cart.unshift(foundItem);
                } else {
                    return;
                }
            }
        },

        removeItem(itemId) {
            const foundItem = this.items.find((item) => item.id === itemId);

            if (!foundItem.qtd) {
                return;
            }

            if (foundItem.qtd >= 1) {
                foundItem.qtd -= 1;
            }

            if (foundItem.qtd === 0) {
                const idx = this.cart.findIndex((item) => item.id === itemId);
                this.cart.splice(idx, 1);

                return;
            }
        },
    },

    computed: {
        roundedValue() {
            return this.totalValue.toFixed(2);
        },
    },

    watch: {
        cart: {
            handler(newCart) {
                this.totalValue = newCart.reduce((total, item) => {
                    return total + parseFloat(item.price) * (item.qtd || 0);
                }, 0);
            },
            deep: true,
        },
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #eee;
    color: #313131;
    font-family: sans-serif;
}

img {
    max-width: 100%;
    display: block;
}

ul {
    list-style: none;
}

.container {
    width: min(100% - 2rem, 75rem);
    margin: 5rem auto;
}

.app__container {
    display: grid;
    gap: 3rem;
}

@media (min-width: 60em) {
    .app__container {
        align-items: start;
        grid-template-columns: 1fr 1fr;
    }
}
</style>
