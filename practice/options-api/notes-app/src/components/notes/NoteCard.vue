<template>
    <article>
        <p>{{ note.content }}</p>

        <h1>{{ note.checked ? "check" : "not-checked" }}</h1>

        <ul v-if="note.categories.length > 0">
            <li v-for="noteCategories in note.categories" :key="noteCategories">
                {{ noteCategories }}
            </li>
        </ul>

        <div class="buttons">
            <base-button @click="setModalAction('check')"
                ><span>Check</span>
                <img src="../../assets/icons/check.svg" alt="" />
            </base-button>

            <base-button
                mode="secondary"
                class="delete"
                @click="setModalAction('delete')"
            >
                <span>Delete</span>
                <img src="../../assets/icons/trash.svg" alt="" />
            </base-button>
        </div>
    </article>

    <base-modal v-show="isModalOpen" @close="closeModal">
        <h3>{{ modalAction === "delete" ? "Delete" : "Check" }} Item?</h3>
        <base-button
            mode="secondary"
            @click="
                modalAction === 'delete' ? removeItem(note) : checkItem(note)
            "
            >{{
                modalAction === "delete" ? "Delete" : "Mark as done"
            }}</base-button
        >
    </base-modal>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            isModalOpen: false,

            modalAction: "",
        };
    },

    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },

        removeItem(item) {
            this.$emit("removeItem", item);

            this.closeModal();
        },

        checkItem(item) {
            this.$emit("checkItem", item);

            this.closeModal();
        },

        setModalAction(newAction) {
            this.openModal();
            this.modalAction = newAction;
        },
    },

    emits: ["removeItem", "checkItem"],
};
</script>

<style scoped>
article {
    border-radius: var(--b-radius);
    background-color: var(--clr-neutral-100);
    display: grid;
    gap: 1.5rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

p {
    word-break: break-all;
}

ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
}

li {
    background-color: var(--clr-neutral-200);
    padding: 0.15rem 0.5rem;
    border-radius: var(--b-radius);
}

.buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-self: end;
}

.delete img {
    filter: invert(100%);
}

h3 {
    margin-bottom: 1rem;
}
</style>
