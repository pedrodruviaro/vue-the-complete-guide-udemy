<template>
    <router-view></router-view>
    <section>
        <base-container spacing>
            <base-title title="All Products" />

            <products-display>
                <product-card
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </products-display>
        </base-container>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../components/products/ProductCard.vue";
import ProductsDisplay from "../components/products/ProductsDisplay.vue";

export default {
    components: { ProductCard, ProductsDisplay },
    computed: {
        ...mapGetters(["products"]),
    },
};
</script>
