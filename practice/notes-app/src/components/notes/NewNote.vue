<template>
    <form @submit.prevent="newNote">
        <textarea
            required
            v-model="enteredContent"
            ref="newContentTextarea"
        ></textarea>

        <fieldset>
            <label v-for="category in categories" :key="category.id">
                <input
                    type="checkbox"
                    v-model="enteredCategories"
                    :value="category.title"
                />
                {{ category.title }}
            </label>

            <base-button type="button" @click="openModal"
                >New Category</base-button
            >
        </fieldset>

        <base-button type="submit" mode="secondary">
            <span>Add Note</span>
            <img src="../../assets/icons/plus.svg" alt="" />
        </base-button>
    </form>

    <CreateCategory
        @newCategory="$emit('newCategory', $event)"
        :isCreatingCategory="isCreatingCategory"
    />
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import CreateCategory from "./CreateCategory.vue";

export default {
    components: { BaseButton, CreateCategory },
    inject: ["categories"],

    data() {
        return {
            enteredContent: "",
            enteredCategories: [],

            isCreatingCategory: false,
        };
    },

    methods: {
        newNote() {
            const newNote = {
                id: new Date().toISOString(),
                content: this.enteredContent,
                categories: this.enteredCategories,
            };

            this.$emit("newNote", newNote);

            this.enteredContent = "";
            this.enteredCategories = [];

            this.$refs.newContentTextarea.focus();
        },

        openModal() {
            this.isCreatingCategory = true;

            setTimeout(() => {
                this.isCreatingCategory = false;
            }, 0);
        },
    },

    emits: ["newNote", "newCategory"],
};
</script>

<style scoped>
form {
    display: grid;
    gap: 1.5rem;
}

textarea {
    display: block;
    width: 100%;
    min-height: 100px;
    padding: 0.5rem;
    border-radius: var(--b-radius);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border: none;
    outline: none;
}

fieldset {
    border: none;
    display: grid;
    gap: 0.25rem;
}

button img {
    filter: invert(100%);
}

button[type="submit"] {
    max-width: unset;
}
</style>
