const app = Vue.createApp({
    data() {
        return {
            person: {
                name: "Pedro",
                age: 27,
            },
            image: "https://lenovotopseller.com/images/parts/section-promocoes-image-01.png",
        };
    },

    methods: {
        ageIn5() {
            return this.person.age + 5;
        },
        randomNumber() {
            return Math.random().toFixed(2);
        },
    },
});

app.mount("#assignment");
