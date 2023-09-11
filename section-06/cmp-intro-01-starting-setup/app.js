const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "219837129387",
                    email: "manuel@gmail.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "12983798",
                    email: "julie@yahoo.com",
                },
            ],
        };
    },

    methods: {},
});

// Creating a component
app.component("friend-contact", {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">
                {{ detailsAreVisible ? "Hide" : "Show"}} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "219837129387",
                email: "manuel@gmail.com",
            },
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
