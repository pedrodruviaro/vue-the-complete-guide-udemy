import { createApp } from "vue";
import App from "./App.vue";

import BaseButton from "./components/UI/BaseButton.vue";
import router from "./router";

const app = createApp(App);

app.component("base-button", BaseButton);

app.use(router);

app.mount("#app");
