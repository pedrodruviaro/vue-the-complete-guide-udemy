import { createApp } from "vue";
import App from "./App.vue";

import MainButton from "./components/ui/MainButton.vue";
import MainHeader from "./components/ui/MainHeader.vue";
import MainModal from "./components/ui/MainModal.vue";

import store from "./store";

const app = createApp(App);

app.component("main-button", MainButton);
app.component("main-header", MainHeader);
app.component("main-modal", MainModal);

app.use(store);

app.mount("#app");
