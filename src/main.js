import Vue from "vue";
import App from "./App.vue";
import FetchGitHub from "./fetch_github_data.js";
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
    get_storage_key(isLatest, opt) {
      let res = "hmage.download." + (isLatest ? "latest" : "stable");
      if (opt) {
        if (opt.type) {
          switch (opt.type) {
            case "url":
              return res + ".url";
            case "count":
              return res + ".count";
            case "expiredAt":
              return res + ".expiredAt";
          }
        }
      }
      return res;
    },
    fetch_download_data_if_needed(isLatest) {
      const storage_key = this.get_storage_key(isLatest);
      const download_url = localStorage.getItem(storage_key + ".url");

      let needUpdate = false;

      if (download_url === null || download_url === undefined) {
        this.log("Couldn't find the download URL");
        needUpdate = true;
      } else {
        const expiredAt = parseInt(
          localStorage.getItem(storage_key + ".expiredAt")
        );
        if (Date.now() > expiredAt) {
          console.log("Cached URL is expired: " + storage_key);
          needUpdate = true;
        }
      }

      if (needUpdate) {
        FetchGitHub.get_download_data(isLatest).then(data => {
          localStorage.setItem(storage_key + ".url", data.url);
          localStorage.setItem(storage_key + ".count", data.count);
          localStorage.setItem(
            storage_key + ".expiredAt",
            Date.now() + 3600000
          );
        });
      }
    },
    fetch_fatal_issue_title() {
      const storage_key_id = "hmage.fatal.id";
      const storage_key_title = "hmage.fatal.title";
      const storage_key_expiredAt = "hmage.fatal.expiredAt";

      const expiredAt = localStorage.getItem(storage_key_expiredAt);
      let needUpdate = false;

      if (expiredAt === null || expiredAt === undefined) {
        this.log("Couldn't find expire data for fatal message");
        needUpdate = true;
      } else if (Date.now() > expiredAt) {
        this.log("Fatal message is expired");
        needUpdate = true;
      }

      if (needUpdate) {
        FetchGitHub.get_fatal_issue_title().then(data => {
          if (data != null) {
            localStorage.setItem(storage_key_id, data.id);
            localStorage.setItem(storage_key_title, data.title);
            localStorage.setItem(storage_key_expiredAt, Date.now() + 600000);
          }
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
    this.fetch_fatal_issue_title();
    this.fetch_download_data_if_needed(true);
    this.fetch_download_data_if_needed(false);
  }
}).$mount("#app");
