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
            <h4 class="price">{{ formatedPrice }}</h4>
            <div>
                <p>In stock: {{ product.stock }}</p>
                <p v-if="totalPrice !== 0 && !isInCart">
                    Total price: {{ totalPrice }}
                </p>
            </div>

            <div class="qtd">
                <product-buttons-qtd
                    v-if="!isInCart"
                    @addQtd="addQtd"
                    @removeQtd="removeQtd"
                    :qtd="qtd"
                />
                <base-button @click="addToCart" v-if="!isInCart"
                    >Add To Cart</base-button
                >
                <base-button @click="removeFromCart" v-else
                    >Remove from Cart</base-button
                >
            </div>
        </footer>
    </article>
</template>

<script>
import ProductButtonsQtd from "./ProductButtonsQtd.vue";

export default {
    components: { ProductButtonsQtd },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            qtd: 1,
        };
    },

    methods: {
        addQtd() {
            if (this.qtd === this.product.stock) return;

            this.qtd += 1;
        },

        removeQtd() {
            if (this.qtd === 1) return;

            this.qtd -= 1;
        },

        addToCart() {
            this.$store.dispatch("addToCart", {
                id: this.product.id,
                qtd: this.qtd,
            });
        },

        removeFromCart() {
            this.$store.dispatch("removeFromCart", {
                id: this.product.id,
            });

            this.qtd = 1;
        },
    },
    computed: {
        formatedPrice() {
            let USDollar = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });

            return USDollar.format(this.product.price);
        },

        isInCart() {
            return this.$store.getters.isInCart(this.product.id);
        },

        totalPrice() {
            const totalPrice = this.product.price * this.qtd;

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
};
</script>

<style lang="scss" scoped>
article {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1.5rem;
    background-color: #ffffff;
    display: grid;
    gap: 1.5rem;

    header {
        height: 12rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    main {
        display: grid;
        gap: 0.25rem;

        h3 {
            font-size: 1.25rem;
            line-height: 1.3;
        }
    }

    footer {
        display: grid;
        gap: 1rem;
    }

    .qtd {
        display: flex;
        align-items: center;
        gap: 1rem;

        .price {
            font-size: 2rem;
        }
    }
}
</style>
