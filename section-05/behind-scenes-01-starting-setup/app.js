const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.myUserText.value;
            // console.dir(this.$refs.myUserText);
        },
    },

    // Vue Instance Lifecycle
    beforeCreate() {
        console.log("Before create!");
    },
    created() {
        console.log("Created!");
    },
    beforeMount() {
        console.log("Before Mount!");
    },
    mounted() {
        console.log("Mounted!");
    },
    beforeUpdate() {
        console.log("Before Update!");
    },
    updated() {
        console.log("Updated!");
    },
    beforeUnmount() {
        console.log("Before Unmount!");
    },
    unmounted() {
        console.log("Unmounted!");
    },
});

app.mount("#app");
