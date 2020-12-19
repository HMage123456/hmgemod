import Vue from "vue";
import App from "./App.vue";
import FetchGitHub from "./fetch_github_data.js";
import UrlBuilder from "./url_builder.js";
import "./assets/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import XHeader from "./components/header.vue";
import XSidebar from "./components/sidebar.vue";
import XContent from "./components/content.vue";
import XFooter from "./components/footer.vue";
import XLink from "./components/link.vue";
import XSubject from "./components/contents/subject.vue";
import XDownload from "./components/download.vue";

Vue.component("fa", FontAwesomeIcon);

Vue.component("x-header", XHeader);
Vue.component("x-sidebar", XSidebar);
Vue.component("x-content", XContent);
Vue.component("x-footer", XFooter);
Vue.component("x-link", XLink);
Vue.component("x-subject", XSubject);
Vue.component("x-download", XDownload);

Vue.mixin({
  methods: {
    destroyDom() {
      this.$destroy();
      if (this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
});

const vm = new Vue({
  render: h => h(App),
  methods: {
    log(msg) {
      console.log("[HMage]" + msg);
    },
    fetch_download_data_if_needed() {
      const builder = new UrlBuilder();
      const download_url = localStorage.getItem(builder.url().build());

      let needUpdate = false;

      if (download_url === null || download_url === undefined) {
        this.log("Couldn't find the download URL");
        needUpdate = true;
      }

      const expiredAt = parseInt(
        localStorage.getItem(builder.expiredAt().build())
      );

      if (Date.now() > expiredAt) {
        needUpdate = true;
      }

      if (needUpdate) {
        FetchGitHub.get_download_data().then(data => {
          localStorage.setItem(builder.url().build(), data.url);
          localStorage.setItem(builder.count().build(), data.count);
          localStorage.setItem(builder.total().build(), data.total);
          localStorage.setItem(
            builder.expiredAt().build(),
            Date.now() + 3600000
          );
        });
      }
    },
    new(vm, props) {
      const x = new vm({
        parent: this,
        propsData: props
      }).$mount();
      this.$el.appendChild(x.$el);
      return x;
    }
  },
  mounted() {
    this.fetch_download_data_if_needed();
  }
}).$mount("#app");
