import PageLogin from "../views/PageLogin.vue";
import PageDashboard from "../views/PageDashboard.vue";
import PageNotFound from "../views/PageNotFound.vue";
import PageTask from "../views/PageTask.vue";

export default [
    { path: "/", redirect: "/dashboard" },
    { path: "/login", component: PageLogin },
    {
        path: "/dashboard",
        component: PageDashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/tasks",
        redirect: "/dashboard",
        children: [
            {
                path: ":id",
                props: true,
                component: PageTask,
                meta: { requiresAuth: true },
            },
        ],
    },
    { path: "/:notFound(.*)", component: PageNotFound },
];
