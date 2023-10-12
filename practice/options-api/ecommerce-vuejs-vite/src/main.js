import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MainHeader from "./components/ui/MainHeader.vue";
import BaseContainer from "./components/base/BaseContainer.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseTitle from "./components/base/BaseTitle.vue";

const app = createApp(App);

app.component("main-header", MainHeader);
app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);
app.component("base-title", BaseTitle);

app.use(store);
app.use(router);

app.mount("#app");
