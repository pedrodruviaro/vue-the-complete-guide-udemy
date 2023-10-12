export default {
    namespaced: true,

    state() {
        return {
            authors: [],
        };
    },

    getters: {
        authors(state) {
            return state.authors;
        },

        authorById: (state) => (id) => {
            return state.authors.find((author) => author.id === id);
        },
    },

    mutations: {
        SET_AUTHORS(state, payload) {
            state.authors = payload;
        },
    },

    actions: {
        setAuthors(context, payload) {
            const authorsArray = payload;

            context.commit("SET_AUTHORS", authorsArray);
        },
    },
};
