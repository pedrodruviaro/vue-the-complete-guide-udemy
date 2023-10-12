import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";

import BaseContainer from "./components/layout/BaseContainer.vue";
import BaseButton from "./components/layout/BaseButton.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
