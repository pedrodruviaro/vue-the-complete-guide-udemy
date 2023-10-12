export default {
    state() {
        return {
            transactions: [],
        };
    },

    getters: {
        transactions(state) {
            return state.transactions;
        },

        totalIncome(state, getters) {
            if (state.transactions.length === 0) {
                return 0;
            }

            const transactions = getters.getAllIncomeTransactions;

            let total = 0;

            transactions.forEach((transaction) => {
                total += transaction.value;
            });

            const formatedValue = total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

            return formatedValue;
        },

        totalOutcome(state, getters) {
            if (state.transactions.length === 0) {
                return 0;
            }

            const transactions = getters.getAllOutcomeTransactions;

            let total = 0;

            transactions.forEach((transaction) => {
                total += transaction.value;
            });

            const formatedValue = total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

            return formatedValue;
        },

        totalTransactions(state, getters) {
            if (state.transactions.length === 0) {
                return { value: 0 };
            }

            const allTransaction = getters.transactions;

            let totalIncome = 0;
            let totalOutome = 0;

            allTransaction.forEach((transaction) => {
                if (transaction.type === "income") {
                    totalIncome += transaction.value;
                } else {
                    totalOutome += transaction.value;
                }
            });

            let total = totalIncome - totalOutome;

            const formatedValue = total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });

            return {
                value: formatedValue,
                status: total >= 0 ? "positive" : "negative",
            };
        },

        getAllIncomeTransactions(state) {
            return state.transactions.filter(
                (transaction) => transaction.type.toLowerCase() === "income"
            );
        },

        getAllOutcomeTransactions(state) {
            return state.transactions.filter(
                (transaction) => transaction.type.toLowerCase() === "outcome"
            );
        },
    },

    mutations: {
        SET_NEW_TRANSACTION(state, payload) {
            state.transactions.unshift(payload);
        },
    },

    actions: {
        addNewTransacion(context, payload) {
            context.commit("SET_NEW_TRANSACTION", payload);
        },
    },
};
