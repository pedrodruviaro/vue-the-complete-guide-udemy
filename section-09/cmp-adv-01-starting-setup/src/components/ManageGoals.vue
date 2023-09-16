<template>
    <h2>Manage Goals</h2>
    <input type="text" placeholder="Goal Name" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
        <ErrorAlert v-if="inputIsInvalid">
            <h2>Type something</h2>
            <button @click="confirmError">Ok</button></ErrorAlert
        >
    </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
    components: { ErrorAlert },
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;

            if (enteredValue.trim() === "") {
                this.inputIsInvalid = true;
            }
        },

        confirmError() {
            this.inputIsInvalid = false;
        },
    },
};
</script>
