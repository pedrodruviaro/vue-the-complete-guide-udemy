import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import SignUpPage from "./views/SignUpPage.vue";
import HomePage from "./views/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: LoginPage },
        { path: "/signup", component: SignUpPage },
        { path: "/", component: HomePage, meta: { requiresAuth: true } },
    ],
});

export default router;
