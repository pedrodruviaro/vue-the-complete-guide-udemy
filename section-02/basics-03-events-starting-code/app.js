const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        submitForm(event) {
            alert("Enviado!");
        },
        confirmName() {
            this.confirmedName = this.name;
        },
    },
});

app.mount("#events");
