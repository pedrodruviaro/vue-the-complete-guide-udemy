<template>
    <base-modal v-show="isModalVisible" @close="closeModal">
        <template #default>
            <h3>Create new category</h3>
            <form @submit.prevent="addCategory">
                <label>
                    Name
                    <input type="text" required v-model="enteredName" />
                </label>
                <base-button mode="secondary">
                    <span>Create</span>
                </base-button>
            </form>
        </template>
    </base-modal>
</template>

<script>
export default {
    data() {
        return {
            enteredName: "",

            isModalVisible: false,
        };
    },

    props: {
        isCreatingCategory: {
            type: Boolean,
            required: true,
        },
    },

    watch: {
        isCreatingCategory: function (newValue, oldValue) {
            if (newValue === true) {
                this.isModalVisible = true;
            }

            return oldValue;
        },
    },

    methods: {
        addCategory() {
            const createId = () => {
                return this.enteredName
                    .trim()
                    .replaceAll(" ", "-")
                    .toLowerCase();
            };

            const newCategory = {
                title: this.enteredName,
                id: createId(),
            };

            this.isModalVisible = false;
            this.enteredName = "";

            this.$emit("newCategory", newCategory);
        },

        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },

    emits: ["newCategory"],
};
</script>

<style scoped>
form {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
}

label {
    font-weight: 600;
}

input {
    display: block;
    border-radius: var(--b-radius);
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
    margin-top: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
</style>
