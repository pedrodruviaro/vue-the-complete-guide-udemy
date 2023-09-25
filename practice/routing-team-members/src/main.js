import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";

import UsersList from "./components/users/UsersList.vue";

const router = createRouter({
    linkActiveClass: "active",
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/teams",
        },
        {
            path: "/teams",
            name: "teams",
            component: TeamsList,

            children: [
                {
                    props: true,
                    name: "teams-id",
                    path: ":id",
                    component: TeamMembers,
                },
            ],
        },
        {
            path: "/users",
            name: "users",
            component: UsersList,
        },
    ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
