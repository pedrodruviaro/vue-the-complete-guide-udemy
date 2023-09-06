const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        handlePlus(value) {
            this.number = this.number + value;
        },
    },
    computed: {
        handleResponse() {
            if (this.number < 37) {
                return "Not there yet";
            } else {
                return "Too much!";
            }
        },
    },
    watch: {
        number(newValue, oldValue) {
            setTimeout(() => {
                this.number = 0;
            }, 5000);
        },
    },
});

app.mount("#assignment");
