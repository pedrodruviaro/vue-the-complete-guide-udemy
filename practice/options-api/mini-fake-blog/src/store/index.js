import { createStore } from "vuex";

import authorsModule from "./modules/authors";
import postsModule from "./modules/posts";

const store = createStore({
    modules: { authors: authorsModule, posts: postsModule },
});

export default store;
