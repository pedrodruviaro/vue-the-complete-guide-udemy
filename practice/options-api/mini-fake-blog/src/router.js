import { createRouter, createWebHistory } from "vue-router";
import PageAuthors from "./views/PageAuthors.vue";
import PageBlog from "./views/PageBlog.vue";
import PageSearch from "./views/PageSearch.vue";
import PageSingleAuthor from "./views/PageSingleAuthor.vue";
import PageSinglePost from "./views/PageSinglePost.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: PageBlog },
        {
            path: "/authors",
            component: PageAuthors,
            children: [
                { path: ":id", component: PageSingleAuthor, props: true },
            ],
        },
        {
            path: "/post",
            redirect: "/",
            children: [{ path: ":id", component: PageSinglePost, props: true }],
        },
        { path: "/search", component: PageSearch },
    ],
});

export default router;
