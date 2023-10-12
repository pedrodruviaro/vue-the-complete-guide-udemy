import { createRouter, createWebHistory } from "vue-router";
import FindPlayer from "./components/pages/FindPlayer.vue";
import NotFound from "./components/pages/NotFound.vue";
import MyTeam from "./components/pages/MyTeam.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0 };
    },
    routes: [
        {
            path: "/",
            redirect: "/find-player",
        },
        {
            path: "/find-player",
            name: "find-player",
            component: FindPlayer,
        },
        {
            path: "/my-team",
            name: "my-team",
            component: MyTeam,
        },
        {
            path: "/:notFound(.*)",
            component: NotFound,
        },
    ],
});

export default router;
