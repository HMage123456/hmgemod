import Vue from "vue";
import App from "./App.vue";
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

const vm = new Vue({
  render: h => h(App),
  methods: {
    log(msg) {
      console.log("[HMage]" + msg);
    },
    get_url_key(isLatest) {
      return (
        "hmage." + (isLatest ? "download_url_latest" : "download_url_stable")
      );
    },
    fetch_download_url_and_save(isLatest) {
      this.log("Waiting for responce...(api.github.com)");
      const url_key = this.get_url_key(isLatest);
      return fetch(
        "https://api.github.com/repos/hmage123456/hmgemod/releases/" +
          (isLatest ? "latest" : "tags/stable"),
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(json => {
          const url = json.assets[0].browser_download_url;
          const download_count = json.assets[0].download_count;
          localStorage.setItem(url_key, url);
          localStorage.setItem(url_key + ".download_count", download_count);
          localStorage.setItem(url_key + ".expiredAt", Date.now());
          return url;
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetch_if_data_invalid(isLatest) {
      const url_key = this.get_url_key(isLatest);
      const download_url = localStorage.getItem(url_key);
      if (!download_url) {
        this.log("Couldn't find the download URL");
        this.fetch_download_url_and_save(isLatest).then(url => {
          this.download_url = url;
        });
      } else {
        const expiredAt = parseInt(
          localStorage.getItem(url_key + ".expiredAt")
        );
        if (Date.now() - expiredAt > 3600000) {
          console.log("Cached URL is expired: " + url_key);
          this.fetch_download_url_and_save(isLatest).then(url => {
            this.download_url = url;
          });
        } else {
          this.download_url = download_url;
        }
      }
    }
  },
  mounted() {
    this.fetch_if_data_invalid(true);
    this.fetch_if_data_invalid(false);
  }
}).$mount("#app");
