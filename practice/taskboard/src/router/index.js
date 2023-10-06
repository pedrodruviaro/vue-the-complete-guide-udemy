import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
import store from "../store";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/login?redirect=" + to.path);
    } else {
        next();
    }
});

export default router;
