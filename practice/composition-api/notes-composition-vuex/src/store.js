import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            notes: [
                {
                    id: "10",
                    title: "Título",
                    note: "asuidhiuasdh",
                    category: "Vuejs",
                },
            ],
        };
    },

    getters: {
        notes(state) {
            return state;
        },

        singleNote: (state) => (id) => {
            return state.notes.find((note) => note.id === id);
        },
    },

    mutations: {
        ADD_NOTE(state, payload) {
            const { note } = payload;
            state.notes.unshift(note);
        },
    },

    actions: {
        addNote(context, payload) {
            const { note } = payload;

            context.commit("ADD_NOTE", { note });
        },
    },
});

export default store;
