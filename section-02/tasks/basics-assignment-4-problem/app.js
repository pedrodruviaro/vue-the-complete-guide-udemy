const app = Vue.createApp({
    data() {
        return {
            typedClass: "",
            isVisible: true,
            bgColor: "#ffffff",
        };
    },
    methods: {
        handleVisibility() {
            return (this.isVisible = !this.isVisible);
        },
    },
    computed: {},
    watch: {},
});

app.mount("#assignment");
