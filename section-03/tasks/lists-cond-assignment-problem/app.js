Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
            isVisible: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
        },

        toggleIsVisible() {
            this.isVisible = !this.isVisible;
        },
    },
}).mount("#assignment");
