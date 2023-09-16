import { createApp } from "vue";
import App from "./App.vue";

import NowReading from "./components/NowReading.vue";
import AddBook from "./components/AddBook.vue";
import ListBooks from "./components/ListBooks.vue";

import ProvideTest from "./components/ProvideTest.vue";

const app = createApp(App);

app.component("now-reading", NowReading);
app.component("add-book", AddBook);
app.component("list-books", ListBooks);

app.component("provide-test", ProvideTest);

app.mount("#app");
