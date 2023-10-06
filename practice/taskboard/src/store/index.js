import { createStore } from "vuex";
import authModule from "./modules/auth";
import tasksModule from "./modules/tasks";

const store = createStore({
    modules: { auth: authModule, tasks: tasksModule },
});

export default store;
