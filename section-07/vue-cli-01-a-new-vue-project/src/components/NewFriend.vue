<template>
    <form @submit.prevent="handleAddNewFriend">
        <div>
            <label>
                Name
                <input type="text" placeholder="Name" v-model="name" />
            </label>
        </div>

        <div>
            <label>
                Phone
                <input type="tel" placeholder="Phone" v-model="phone" />
            </label>
        </div>

        <div>
            <label>
                Email
                <input type="email" placeholder="Email" v-model="email" />
            </label>
        </div>

        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            phone: "",
            email: "",
        };
    },

    emits: ["add-contact"],

    methods: {
        handleAddNewFriend() {
            const newFriend = {
                name: this.name,
                phone: this.phone,
                email: this.email,
            };

            this.$emit("add-contact", newFriend);
        },
    },
};
</script>
