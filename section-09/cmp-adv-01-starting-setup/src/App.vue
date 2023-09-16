<template>
    <div>
        <TheHeader />

        <div>
            <button @click="handleSelectComponent('ActiveGoals')">
                Active Goals
            </button>
            <button @click="handleSelectComponent('ManageGoals')">
                Manage Goals
            </button>
        </div>

        <!-- IF way -->
        <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
        <ManageGoals v-if="selectedComponent === 'ManageGoals'" /> -->

        <!-- Dynamic Components -->
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
    components: { TheHeader, ActiveGoals, ManageGoals },
    data() {
        return {
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },

            selectedComponent: "ActiveGoals",
        };
    },

    methods: {
        handleSelectComponent(component) {
            this.selectedComponent = component;
        },
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
