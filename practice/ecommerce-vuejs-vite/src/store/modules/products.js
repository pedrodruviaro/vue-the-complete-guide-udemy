export default {
    state() {
        return {
            products: [],
        };
    },

    getters: {
        products(state) {
            return state.products;
        },
    },

    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
    },

    actions: {
        async setProducts(context) {
            try {
                const response = await fetch("https://dummyjson.com/products");

                if (response.ok && response.status === 200) {
                    const data = await response.json();

                    context.commit("SET_PRODUCTS", data.products);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};
