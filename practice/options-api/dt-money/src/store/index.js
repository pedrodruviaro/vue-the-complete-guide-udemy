import { createStore } from "vuex";
import transactios from "./modules/transactios";

const store = createStore({
    modules: { transactios },
});

export default store;
