import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import NoSSR from "vue-no-ssr";

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import "./assets/css/vegas.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-datepicker.min.css";
import "./assets/css/animate.min.css";

import "./assets/css/agrikol_iconl.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

Vue.use(BootstrapVue).use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
