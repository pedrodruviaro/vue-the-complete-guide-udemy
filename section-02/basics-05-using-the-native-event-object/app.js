const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            // fullname: "",
        };
    },
    computed: {
        fullName() {
            console.log("computed: running again...");
            if (this.name === "" || this.lastName === "") {
                return "";
            }
            return this.name + " " + this.lastName;
        },
    },

    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        },

        // name(newValue, oldValue) {
        //     if (newValue === "") {
        //         this.fullname = "";
        //     } else {
        //         this.fullname = newValue + " " + "Ruviaro";
        //     }
        // },
        // lastName(value) {
        //     if (value === "") {
        //         this.fullname = "";
        //     } else {
        //         this.fullname = this.name + " " + value;
        //     }
        // },
    },

    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = "";
        },
    },
});

app.mount("#events");
