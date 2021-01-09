import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 语言配置
import VueI18n from "./language";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueI18n)
  .mount("#app");
