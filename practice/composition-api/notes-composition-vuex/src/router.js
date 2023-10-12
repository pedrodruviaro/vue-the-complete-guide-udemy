import { createRouter, createWebHistory } from "vue-router";
import PageNotes from "./views/PageNotes.vue";
import PageSingleNote from "./views/PageSingleNote.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: PageNotes },
        {
            path: "/notes",
            redirect: "/",
            children: [{ path: ":id", component: PageSingleNote }],
        },
    ],
});

export default router;
