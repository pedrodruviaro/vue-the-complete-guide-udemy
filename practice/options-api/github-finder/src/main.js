import { createApp } from "vue";
import App from "./App.vue";

import TheHeader from "./components/UI/TheHeader.vue";

const app = createApp(App);

app.component("the-header", TheHeader);

app.mount("#app");
