<template>
    <section>
        <base-container spacing>
            <base-title :title="title" />
            <h2 class="loading" v-if="loading">Loading...</h2>
            <p v-if="error" class="error">{{ error }}</p>
            <products-display>
                <product-card
                    v-for="product in productsByCategory"
                    :key="product.id"
                    :product="product"
                />
            </products-display>
        </base-container>
    </section>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";
import ProductsDisplay from "../components/products/ProductsDisplay.vue";

export default {
    components: { ProductCard, ProductsDisplay },
    props: ["id"],

    computed: {
        title() {
            return `Category - ${this.id}`;
        },
    },

    data() {
        return {
            productsByCategory: [],
            error: "",
            loading: false,
        };
    },

    methods: {
        async fetchData(id) {
            this.error = "";
            this.loading = true;

            try {
                const response = await fetch(
                    `https://dummyjson.com/products/category/${id}`
                );

                if (response.ok && response.status === 200) {
                    const data = await response.json();

                    console.log(data);

                    if (data.total <= 0) {
                        this.error = `No product found on ${id} category...`;
                        return;
                    }

                    console.log(data);

                    this.productsByCategory = data.products;
                }
            } catch (error) {
                console.error(error);
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },

    mounted() {
        this.fetchData(this.id);
    },

    watch: {
        id() {
            this.fetchData(this.id);
        },
    },
};
</script>

<style lang="scss" scoped>
.error,
.loading {
    text-align: center;
    margin-bottom: 2rem;
}
</style>
