<template>
    <article>
        <header>
            <img
                :src="product.images[0]"
                :alt="product.title"
                loading="lazy"
                decoding="async"
            />
        </header>
        <main>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
        </main>
        <footer>
            <h4 class="price">{{ formatedPriceItem }}</h4>
            <div>
                <p>Total price: {{ totalPrice }}</p>
            </div>

            <div class="qtd">
                <products-buttons-qtd
                    @addQtd="addQtd"
                    @removeQtd="removeQtd"
                    :qtd="product.qtd"
                />

                <base-button @click="removeFromCart"
                    >Remove from Cart</base-button
                >
            </div>
        </footer>
    </article>
</template>

<script>
import ProductsButtonsQtd from "./ProductButtonsQtd.vue";

export default {
    components: { ProductsButtonsQtd },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },

    computed: {
        formatedPriceItem() {
            return this.formatePrice(this.product.price);
        },

        totalPrice() {
            const totalPrice = this.product.price * this.product.qtd;

            if (totalPrice === 0) {
                return 0;
            }

            let USDollar = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            return USDollar.format(totalPrice);
        },
    },

    methods: {
        addQtd() {
            this.$store.dispatch("addProductQtd", { id: this.product.id });
        },

        removeQtd() {
            this.$store.dispatch("removeProductQtd", { id: this.product.id });
        },

        removeFromCart() {
            this.$store.dispatch("removeFromCart", {
                id: this.product.id,
            });

            this.product.qtd = 0;
        },

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
article {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1.5rem;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 10rem 1fr max-content;
    gap: 1.5rem;
}
</style>
