export default {
    state() {
        return {
            cart: [],
        };
    },

    getters: {
        cartQtd(state) {
            return state.cart.length;
        },

        isInCart: (state) => (id) => {
            return state.cart.some((item) => item.id === id);
        },

        cartItems(state, _, rootState) {
            const cart = state.cart;

            let products = [];

            for (let i = 0; i < rootState.products.products.length; i++) {
                const product = rootState.products.products[i];

                cart.forEach((item) => {
                    if (item.id === product.id) {
                        products.push({ qtd: item.qtd, ...product });
                    }
                });
            }
            return products;
        },

        totalCartPrice(_, getters) {
            const cartItems = getters.cartItems;

            let total = 0;

            cartItems.forEach((item) => {
                const calculatedPrice = item.qtd * item.price;

                total += calculatedPrice;
            });

            return total;
        },
    },

    mutations: {
        ADD_TO_CART(state, payload) {
            const { id } = payload;

            const isInCart = state.cart.some((item) => item.id === id);

            if (isInCart) {
                return;
            }

            state.cart.push(payload);
        },

        REMOVE_FROM_CART(state, payload) {
            const { id } = payload;

            const indexOfItem = state.cart.findIndex((item) => item.id === id);

            state.cart.splice(indexOfItem, 1);
        },

        ADD_PRODUCT_QTD_TO_CART(state, payload) {
            const { id } = payload;

            const item = state.cart.find((item) => item.id === id);

            if (item.qtd === item.stock) return;

            item.qtd += 1;
        },

        REMOVE_PRODUCT_QTD_TO_CART(state, payload) {
            const { id } = payload;

            const item = state.cart.find((item) => item.id === id);

            if (item.qtd === 1) return;

            item.qtd -= 1;
        },
    },

    actions: {
        addToCart(context, payload) {
            context.commit("ADD_TO_CART", payload);
        },

        removeFromCart(context, payload) {
            context.commit("REMOVE_FROM_CART", payload);
        },

        addProductQtd(context, payload) {
            context.commit("ADD_PRODUCT_QTD_TO_CART", payload);
        },

        removeProductQtd(context, payload) {
            context.commit("REMOVE_PRODUCT_QTD_TO_CART", payload);
        },
    },
};
