<template>
    <section class="cart">
        <base-container spacing>
            <base-title title="Checkout" />

            <h2 v-if="totalCartPrice !== 0">
                Total Price: {{ formatePrice(totalCartPrice) }}
            </h2>

            <h2 v-else>Cart is empty!</h2>

            <div class="items">
                <product-checkout
                    v-for="product in cartItems"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </base-container>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCheckout from "../components/products/ProductCheckout.vue";

export default {
    components: { ProductCheckout },

    computed: {
        ...mapGetters(["cartItems", "totalCartPrice"]),
    },

    methods: {
        formatePrice(value) {
            let USDollar = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            return USDollar.format(value);
        },
    },
};
</script>

<style lang="scss" scoped>
.items {
    display: grid;
    gap: 2rem;
}

h2 {
    margin-bottom: 2rem;
    text-align: center;
}
</style>
