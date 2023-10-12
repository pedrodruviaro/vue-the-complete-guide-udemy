import "./styles/reset.css";
import "./styles/global.css";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import BaseContainer from "./components/layout/BaseContainer.vue";
import BaseButton from "./components/layout/BaseButton.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
