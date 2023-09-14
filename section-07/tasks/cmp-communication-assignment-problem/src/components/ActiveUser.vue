<template>
    <form>
        <input
            type="text"
            placeholder="Username"
            :value="username"
            @input="changeUsername"
        />
        <input
            type="number"
            placeholder="Age"
            :value="age"
            @input="changeAge"
        />
    </form>
</template>

<script>
export default {
    data() {
        return {
            age: 0,
            username: "",
        };
    },

    emits: ["change-username", "change-age"],

    methods: {
        changeUsername(e) {
            this.username = e.target.value;

            this.$emit("change-username", this.username);
        },

        changeAge(e) {
            this.age = e.target.value;
            this.$emit("change-age", this.age);
        },
    },
};
</script>
