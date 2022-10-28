import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/main.css";

const app = createApp({
  render: () => h(App),
});

app.use(store);
app.mount("#app");
