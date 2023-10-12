import { createRouter, createWebHistory } from "vue-router";

import PageCategory from "./pages/PageCategory.vue";
import PageCheckout from "./pages/PageCheckout.vue";
import PageProducts from "./pages/PageProducts.vue";
import PageNotFound from "./pages/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes: [
        { path: "/", redirect: "/products" },
        {
            path: "/products",
            component: PageProducts,
            children: [
                { path: "category/:id", component: PageCategory, props: true },
            ],
        },
        { path: "/checkout", component: PageCheckout },
        { path: "/:notFound(.*)", component: PageNotFound },
    ],
});

export default router;
