const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },

    computed: {
        boxAClasses() {
            return {
                active: this.boxASelected,
            };
        },
    },

    methods: {
        boxSelected(id) {
            if (id === "A") {
                this.boxASelected = !this.boxASelected;
                return;
            }

            if (id === "B") {
                this.boxBSelected = !this.boxBSelected;
                return;
            }

            if (id === "C") {
                this.boxCSelected = !this.boxCSelected;
                return;
            }
        },
    },
});

app.mount("#styling");
