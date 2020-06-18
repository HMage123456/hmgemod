import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import XHeader from "./components/header.vue";
import XSidebar from "./components/sidebar.vue";
import XContent from "./components/content.vue";
import XFooter from "./components/footer.vue";

import XDownload from "./components/download.vue";

Vue.component("fa", FontAwesomeIcon);

Vue.component("x-header", XHeader);
Vue.component("x-sidebar", XSidebar);
Vue.component("x-content", XContent);
Vue.component("x-footer", XFooter);
Vue.component("x-download", XDownload);

const vm = new Vue({
  render: h => h(App)
}).$mount("#app");
