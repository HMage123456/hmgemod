<template>
  <a :href="download_url">
    <button
      @mouseover="mouseovered()"
      @mouseleave="hovered = false"
      @click="clicked"
      id="download"
      class=" bg-gray-300 hover:bg-gray-400 text-gray-600 my-2 py-4 px-6 rounded-md shadow-md inline-flex items-center focus:outline-none"
    >
      <div class="mr-2">
        <fa class="text-2xl" :icon="faCloudDownloadAlt" />
      </div>
      <div>
        <span class="text-lg block leading-tight">{{ button_text }}</span>
        <div
          class="text-sm text-gray-500 block leading-tight text-center w-full h-6"
        >
          <span v-if="!hovered">
            {{ button_text_sub }}
          </span>
          <span v-if="hovered">
            {{ download_total + " Downloads" }}
          </span>
        </div>
      </div>
    </button>
  </a>
</template>
<script>
import UrlBuilder from "../url_builder.js";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const builder = new UrlBuilder();

export default {
  data() {
    return {
      hovered: false,
      button_text: "ダウンロード",
      button_text_sub: "Download",
      download_url: localStorage.getItem(builder.url().build()),
      download_count: localStorage.getItem(builder.count().build()),
      download_total: localStorage.getItem(builder.total().build()),
      faCloudDownloadAlt
    };
  },
  methods: {
    clicked() {
      this.download_count++;
      this.download_total++;
      localStorage.setItem(builder.count().build(), this.download_count);
      localStorage.setItem(builder.total().build(), this.download_total);
    },
    mouseovered() {
      this.hovered = true;
      this.download_count = localStorage.getItem(builder.count().build());
      this.download_total = localStorage.getItem(builder.total().build());
    },
    shouldShowTotal() {
      const now = parseInt(Date.now() / 1000);
      const ret = now % 5 == 0;
      return ret;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
