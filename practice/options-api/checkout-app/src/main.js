import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseList from "./components/UI/BaseList.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-list", BaseList);

app.mount("#app");
