<template>
    <div class="modal--content">
        <h2>Cadastrar Transação</h2>
        <form @submit.prevent="addTransaction">
            <input
                type="text"
                placeholder="Título"
                v-model="transactionTitle"
                required
            />
            <input
                type="number"
                placeholder="Valor"
                min="1"
                step="any"
                v-model="transactionValue"
                required
            />

            <buttons-transaction-type
                v-model="transactionType"
            ></buttons-transaction-type>

            <input
                type="text"
                placeholder="Categoria"
                v-model="transactionCategory"
                required
            />

            <main-button mode="secondary" type="submit">Cadastrar</main-button>
        </form>

        <button @click="$emit('close')" class="close">
            <ph-x :size="25" color="var(--clr-neutral-600)" />
        </button>
    </div>
</template>

<script>
import { PhX } from "@phosphor-icons/vue";
import { mapActions } from "vuex";
import ButtonsTransactionType from "./ButtonsTransactionType.vue";

export default {
    components: { PhX, ButtonsTransactionType },

    data() {
        return {
            transactionType: "income",
            transactionTitle: "",
            transactionValue: "",
            transactionCategory: "",
        };
    },

    methods: {
        addTransaction() {
            const newTransaction = {
                id: new Date().toISOString(),
                title: this.transactionTitle,
                type: this.transactionType,
                value: this.transactionValue,
                category: this.transactionCategory,
                date: new Date().toLocaleDateString("pt-br"),
            };

            this.addNewTransacion(newTransaction);
            this.$emit("close");
        },

        toggleTransactionType(type) {
            this.transactionType = type;
        },

        ...mapActions(["addNewTransacion"]),
    },

    emits: ["close"],
};
</script>

<style lang="scss" scoped>
.modal--content {
    display: grid;
    gap: 1rem;

    h2 {
        margin-bottom: 0.75rem;
    }

    form {
        display: grid;
        gap: 1rem;

        input {
            background-color: var(--clr-neutral-200);
            outline: none;
            border: none;
            padding: 0.7rem 1rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
                rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

            &::placeholder {
                opacity: 0.7;
            }
        }

        button[type="submit"] {
            margin-top: 0.75rem;
        }
    }

    .close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
}
</style>
