<template>
  <a :href="download_url">
    <button
      :disabled="download_url == null"
      id="download"
      class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-normal my-2 py-4 px-6 rounded inline-flex items-center focus:outline-none"
    >
      <fa class="text-2xl mr-2" :icon="faAngleDown" />
      <div>
        <span class="text-lg block leading-tight">{{ button_text }}</span>
        <span class="text-sm text-gray-500 block leading-tight">{{
          button_text_sub
        }}</span>
      </div>
    </button>
  </a>
</template>
<script>
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default {
  props: ["isLatest"],
  data() {
    return {
      button_text: this.isLatest
        ? "最新版をダウンロード"
        : "安定版をダウンロード",
      button_text_sub: this.isLatest ? "Download latest" : "Download stable",
      download_url: "",
      faAngleDown
    };
  },
  created() {
    const download_url = localStorage.getItem(this.get_url_key());
    if (!download_url) {
      this.fetch_download_url_and_save().then(url => {
        this.download_url = url;
      });
    } else {
      const expiredAt = parseInt(
        localStorage.getItem(this.get_url_key() + ".expiredAt")
      );
      if (Date.now() - expiredAt > 3600000) {
        console.log("Cached URL is expired: " + this.get_url_key());
        this.fetch_download_url_and_save().then(url => {
          this.download_url = url;
        });
      } else {
        this.download_url = download_url;
      }
    }
  },
  methods: {
    fetch_download_url_and_save() {
      console.log("Waiting for responce...(api.github.com)");
      return fetch(
        "https://api.github.com/repos/hmage123456/hmgemod/releases/latest",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(json => {
          const url = json.assets[0].browser_download_url;
          localStorage.setItem(this.get_url_key(), url);
          localStorage.setItem(this.get_url_key() + ".expiredAt", Date.now());
          return url;
        })
        .catch(error => {
          console.error(error);
        });
    },
    get_url_key() {
      return (
        "hmage." +
        (this.isLatest ? "download_url_latest" : "download_url_stable")
      );
    }
  }
};
</script>
