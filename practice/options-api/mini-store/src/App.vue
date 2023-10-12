<template>
    <div>
        <TheHeader :cart="cart" :handleCart="handleCart" />

        <main>
            <SelectType
                :currentStoreTab="currentStoreTab"
                @changeCurrentStoreTab="handleChangeCurrentStoreTab"
            />

            <ItemsSection
                v-if="currentStoreTab === 'food'"
                title="Food"
                :items="foods"
                @changeCart="handleCart"
            />
            <ItemsSection
                v-else
                title="Drink"
                @changeCart="handleCart"
                :items="drinks"
            />
        </main>
    </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import SelectType from "./components/Store/SelectType.vue";
import ItemsSection from "./components/Store/ItemsSection.vue";

export default {
    components: { TheHeader, SelectType, ItemsSection },
    data() {
        return {
            foods: [
                {
                    id: "banana",
                    name: "Banana",
                },
                {
                    id: "mango",
                    name: "Mango",
                },
            ],

            drinks: [
                {
                    id: "beer",
                    name: "Beer",
                },
                {
                    id: "tequila",
                    name: "Tequila",
                },
            ],

            currentStoreTab: "food",

            cart: [],
        };
    },

    methods: {
        handleChangeCurrentStoreTab(newTab) {
            this.currentStoreTab = newTab;
        },

        handleCart({ act, item }) {
            const isInCart = this.cart.find((x) => x.id === item.id);

            if (act === "add") {
                if (!isInCart) {
                    this.cart.push(item);
                }
            } else if (act === "remove") {
                if (isInCart) {
                    const idx = this.cart.findIndex((x) => x.id === item.id);
                    this.cart.splice(idx, 1);
                }
            }
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #333;
    color: #fefefe;
    font-family: "Open Sans", sans-serif;
}

input,
button {
    font: inherit;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: min(100% - 2rem, 70rem);
    margin-inline: auto;
}
</style>
